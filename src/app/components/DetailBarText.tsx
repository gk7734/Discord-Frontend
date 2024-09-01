import { FC } from 'react'

interface DetailBarTextProps {
    text: string;
    color?: string;
}

const DetailBarText: FC<DetailBarTextProps> = ({ text, color }) => {
    return (
        <div className={`.detailText`} style={{color: color}}>
            <h2>{text}</h2>
        </div>
    )
}

export default DetailBarText;
