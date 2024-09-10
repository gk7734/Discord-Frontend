import './scss/MainBase.scss'

import DetailBar from "@/app/components/DetailBar";
import MainBar from "@/app/components/MainBar";

const MainBase = () => {
    return (
        <div className={`mainBase`}>
            <DetailBar />
            <MainBar />
        </div>
    )
}

export default MainBase;
