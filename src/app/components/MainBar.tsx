'use client'

import './scss/MainBar.scss'
import AddFriendSt from "@/app/components/Selects/AddFriendSt";
import CurrentlyActive from "@/app/components/CurrentlyActive";
import {useSelectedIndexStore} from "@/app/store/useStore";
import OnlineSt from "@/app/components/Selects/OnlineSt";
import AllSt from "@/app/components/Selects/AllSt";
import WaitSt from "@/app/components/Selects/WaitSt";
import BlackListSt from "@/app/components/Selects/BlackListSt";

const MainBar = () => {
  const selectedIndex = useSelectedIndexStore(state => state.selectedIndex);

  return (
        <div className={`main-container`}>
          {selectedIndex === 0 ? <OnlineSt /> : null}
          {selectedIndex === 1 ? <AllSt /> : null}
          {selectedIndex === 2 ? <WaitSt /> : null}
          {selectedIndex === 3 ?  <BlackListSt /> : null}
          {selectedIndex === 4 ?  <AddFriendSt/> : null}
            <CurrentlyActive />
        </div>
    )
}

export default MainBar;
