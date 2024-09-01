import './scss/DetailBar.scss'
import Image from "next/image";
import People from '../../../public/Images/people.svg'
import DetailBarText from "@/app/components/DetailBarText";

const DetailBar = () => {
    return (
        <div className={`detail-container`}>
            <div className={`selectBar`}>
                <div>
                    <Image src={People} alt={'people-svg'} />
                    <h2>친구</h2>
                </div>
                <div className="divider"></div>
                <DetailBarText text={'온라인'} />
            </div>
        </div>
    )
}

export default DetailBar;
