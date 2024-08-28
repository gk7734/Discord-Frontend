import {FC} from "react";
import './scss/FormBtn.scss'

interface FormBtnProps {
    title: string;
}

const FormBtn: FC<FormBtnProps> = ({ title }) => {
    return (
        <div className={`formBtn`}>
            <h1>{title}</h1>
        </div>
    )
}

export default FormBtn;
