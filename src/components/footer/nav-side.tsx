import React, {memo} from 'react'
import {Btn} from "../universal/button/button";


const ContactFooter : React.FunctionComponent =  () : JSX.Element => {
    return (
        <div className='contact-footer'>
            <span className='span-title'>Contact</span>
            <p className="p-card">
                5 Rue Dalou, 75015 Paris<br />
                <span className='decorate-text-footer'>
                        +123 456 789 <br />
                        josefin@mail.com
                    </span>
            </p>
        </div>
    )
}


const SubscribeFooter : React.FunctionComponent =  () : JSX.Element => {
    return (
        <div className='subscribe-footer'>
            <input type="email" name='email' placeholder='Email'/>
            <Btn innerText='Subscribe' bgColor='#fff'
                 textColor='#000' bgColorHover='rgba(41, 46, 54, 0.95)' colorHover='#fff' />
        </div>
    )
}
const WorkingFooter : React.FunctionComponent =  () : JSX.Element => {
    return (
        <div className='working-footer'>
            <ul>
                <li><span className='decorate-text-footer'>Mon – Fri: </span>7.00am – 6.00pm</li>
                <li><span className='decorate-text-footer'>Sat: </span>7.00am – 6.00pm</li>
                <li><span className='decorate-text-footer'>Sun: </span>8.00am – 6.00pm</li>
            </ul>
        </div>
    )
}

export const EmailSubSide : React.FunctionComponent =  () : JSX.Element => {
    return (
        <div className='email-side'>
            <ContactFooter />
            <SubscribeFooter />
            <WorkingFooter />
        </div>
    )
}
