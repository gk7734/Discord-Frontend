'use client'

import './scss/BaseBar.scss'
import People from "@/app/components/Svgs/People";
import Nitro from "@/app/components/Svgs/Nitro";
import Shop from "@/app/components/Svgs/Shop";
import { AiOutlinePlus } from "react-icons/ai";
import {useState} from "react";
import {useModalStore, useSelectStore} from "@/app/store/useStore";
import DmModal from "@/app/components/DmModal";

const BaseBar = () => {
    const { select, setSelect } = useSelectStore();
    const { isOpen, setOpen } = useModalStore();

    return (
        <div className={`base-container`}>
            <div className={`selectBox`}>
                <div
                    className={`bFlex ${select === 1 ? 'select' : ''}`}
                    onClick={() => setSelect(1)}
                >
                    <People/>
                    <h2>친구</h2>
                </div>
                <div
                    className={`bFlex ${select === 2 ? 'select' : ''}`}
                    onClick={() => setSelect(2)}
                >
                    <Nitro/>
                    <h2>Nitro</h2>
                </div>
                <div
                    className={`bFlex ${select === 3 ? 'select' : ''}`}
                    onClick={() => setSelect(3)}
                >
                    <Shop/>
                    <h2>상점</h2>
                </div>
            </div>
            <div className={`friendBox`}>
                <div className={`plus-dm`}>
                    <p>다이렉트 메세지</p>
                    <AiOutlinePlus size={16} onClick={() => setOpen(!isOpen)} />
                </div>
            </div>
            {isOpen && <DmModal />}
        </div>
    )
}

export default BaseBar;
