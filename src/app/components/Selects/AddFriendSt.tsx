'use client'

import './scss/AddFriendSt.scss'
import WumpusLoneliness from "@/app/components/Svgs/Wumpus/WumpusLoneliness";
import {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AddFriendSt = () => {
    const [search, setSearch] = useState<string>('');

    const clickHandler = async () => {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/friend/add`, {
          username: search
        }, {
          headers: {
            Authorization: `Bearer ${Cookies.get('access_token')}`
          }
        })
            .then((res) => {
              if (res.status === 201) {
                alert(`${search}님의 친구가 추가되었습니다.`)
              }
            })
      } catch (err) {
        throw new Error(`${err}`)
      }
    }

    return (
        <section className={`addFriend-container`}>
            <div className={`addBox`}>
                <div className={`mainTextBox`}>
                    <h1>친구 추가하기</h1>
                </div>
                <div className={`subTextBox`}>
                    <p>Discord 사용자명을 이용하여 친구를 추가할 수 있어요.</p>
                </div>
                <div className={`inputBox`}>
                    <input
                        type="text"
                        placeholder="Discord 사용자명을 이용하여 친구를 추가할 수 있어요."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className={!search.trim() ? '' : 'searched'}
                        onClick={clickHandler}
                        disabled={!search.trim()}
                        style={{
                            cursor: !search.trim() ? 'not-allowed' : 'pointer',
                            background: !search.trim() ? 'rgba(88, 101, 242, 0.65)' : '#5865f2'
                        }}>친구 요청 보내기
                    </button>
                </div>
            </div>
            <WumpusLoneliness/>
            <p className={`wumpusText`}>Wumpus는 친구를 기다리고 있어요.</p>
        </section>
    )
}

export default AddFriendSt;
