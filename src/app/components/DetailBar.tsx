import './scss/DetailBar.scss'
import SelectBar from "@/app/components/SelectBar";
import {FC} from "react";

interface DetailBarProps {
  chat?: boolean;
}

const DetailBar: FC<DetailBarProps> = ({chat}) => {
    return (
        <div className={`detail-container`}>
           <SelectBar />
        </div>
    )
}

export default DetailBar;
