import React, {useState} from "react";
import {Btn} from "../universal/button/button";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

export const DateInput: React.FC<{}> =  () => {
    const [startDate, setStartDate]: [Date | null, any] = useState(null);
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="red-border"
            placeholderText='Date'
        />
    );
}

export const FormReservation: React.FC<{ }> = ( ) => {
    return (
        <form className='form-reservation' onSubmit={(event) => event.preventDefault()}>
            <span className="span-title">reservation</span>
            <h2 className='h2-blocks'>Book Your Table</h2>
            <div className='inputs-side'>
                <input type="text" name='name' placeholder='Name' />
                <input type="email" name='email' placeholder='Email' />
                <input type="number" name='persons' placeholder='Persons'/>
                <input type="number" name='hours' placeholder='Timing   '/>
                <DateInput />
            </div>
            <Btn innerText='Book A Table'
                 colorHover='#fff'
                 textColor='#000'
                 bgColor='#fff'
                 bgColorHover='rgba(41, 46, 54, 0.95)'
                 colorBorder='#000'
            />
        </form>
    )
}