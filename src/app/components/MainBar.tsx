'use client'

import './scss/MainBar.scss'
import AddFriendSt from "@/app/components/Selects/AddFriendSt";
import CurrentlyActive from "@/app/components/CurrentlyActive";

const MainBar = () => {
    return (
        <div className={`main-container`}>
            <AddFriendSt />
            <CurrentlyActive />
        </div>
    )
}

export default MainBar;
