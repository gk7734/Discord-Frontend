'use client'

import './scss/AddFriendSt.scss'
import WumpusLoneliness from "@/app/components/Svgs/Wumpus/WumpusLoneliness";
import {useState} from "react";

const AddFriendSt = () => {
    const [search, setSearch] = useState<string>('');

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
