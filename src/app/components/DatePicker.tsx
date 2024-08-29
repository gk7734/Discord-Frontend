import './scss/DatePicker.scss';
import { IoIosArrowDown } from 'react-icons/io';

const DatePicker = () => {
    return (
        <div className="date-picker">
            <label>생년월일<sup className="required">*</sup></label>
            <div className="picker-box">
                <div className="inputBox">
                    <input type="text" placeholder={'년'}/>
                    <IoIosArrowDown size={24} color={'rgba(182, 185, 193, 0.75)'} className={`icon`} />
                </div>
                <div className="inputBox">
                    <input type="text" placeholder={'월'}/>
                    <IoIosArrowDown size={24} color={'rgba(182, 185, 193, 0.75)'} className={`icon`} />
                </div>
                <div className="inputBox">
                    <input type="text" placeholder={'일'}/>
                    <IoIosArrowDown size={24} color={'rgba(182, 185, 193, 0.75)'} className={`icon`} />
                </div>
            </div>
        </div>
    );
};

export default DatePicker;
