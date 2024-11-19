'use client'

import './scss/ChatBase.scss'
import ChannelBottomBar from "@/app/components/channelBottomBar";
import { useSelectDmStore, useSelectStore, useUserDataStore } from "@/app/store/useStore";
import { useCallback, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import axios from "axios";
import Cookies from "js-cookie";

interface Message {
  senderId: string;
  content: string;
  createdAt: string;
}

interface MessagesResponse {
  message: Message[];
}

const SOCKET_URL = 'localhost:3001/chat';

const DEFAULT_PROFILE_IMAGE = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Fdiscord-logo-transparent-profile-picture-7.png&f=1&nofb=1&ipt=10bb879158e17470c5bdb61a09545186f45460ee635c3db820300bd1137c5524&ipo=images';
const ChatBase = () => {
  const setSelectIndex = useSelectStore(state => state.setSelect);
  const [message, setMessage] = useState<string>('');
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [continueWriting, setContinueWriting] = useState<boolean>(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const socketRef = useRef<Socket | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const friendName = useSelectDmStore(state => state.friendName);
  const { userData, setUserData } = useUserDataStore();

  const initializeSocket = useCallback(() => {
    socketRef.current = io(SOCKET_URL, {
      transports: ['websocket']
    });

    socketRef.current.on('connect', () => {
      console.log('Socket connected');
      if (userData?.username) {
        socketRef.current?.emit('join', { userId: userData.username });
      }
    });

    socketRef.current.on('roomHistory', (data: MessagesResponse) => {
      setMessageList(data.message);
    });

    socketRef.current.on('receiveDM', (data) => {
      setMessageList(prevList => [...prevList, { senderId: data.from, content: data.content, createdAt: data.createdAt }]);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [userData?.username]);

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${period}${formattedHours}:${formattedMinutes}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !socketRef.current || !userData?.username) return;

    try {
      socketRef.current.emit('sendDM', {
        from: userData.username,
        to: friendName,
        content: message.trim()
      });
      setContinueWriting(true)
      setMessage('');
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  const MessageItem = ({ msg }: { msg: Message }) => (
      <div className="messageBox">
        <img
            src={DEFAULT_PROFILE_IMAGE}
            alt="profile"
            className="profileImage"
            width={36}
            height={36}
        />
        <div>
          <div className="messageDetail">
            <h1 className="messageUsername">{msg.senderId}</h1>
            <p className="messageTimestamp">{formatTime(new Date(msg.createdAt))}</p>
          </div>
          <h2 className="messageContent">{msg.content}</h2>
        </div>
      </div>
  );

  useEffect(() => {
    if (friendName?.length === 0) {
      window.location.href = '/channels/me'
    }
    setSelectIndex(-1);
    initializeSocket();
  }, [initializeSocket, setSelectIndex]);

  useEffect(() => {
    // Scroll to the bottom when messageList updates
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }

    if (messageList[messageList.length - 1]?.senderId !== userData.username) {
      setContinueWriting(false);
    }
  }, [messageList]);

  useEffect(() => {
    if (continueWriting) {
      const id = setTimeout(() => {
        setContinueWriting(false);
      }, 10000);
      setTimeoutId(id);
    } else if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    // cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [continueWriting]);

  return (
      <section className="chatBase-container">
        <div className="chatBox" ref={scrollRef}>
          <div className={`messages-container`}>
            {messageList.map((msg, idx) => (
                <MessageItem key={idx} msg={msg} />
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <ChannelBottomBar message={message} setMessage={setMessage} />
        </form>
      </section>
  );
};

export default ChatBase;
