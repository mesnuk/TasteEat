import React from "react";
import {TitleHeading} from "../universal/title-heading/TitleHeading";

export const FunctionCard: React.FC<{
    src : string;
    text : string;
}> = ({src, text}) =>{
    return (
        <div className='function-card'>
            <img src={src} alt="icon"/>
            <p>{text}</p>

        </div>
    )
}



export const TitleSide: React.FC<{}> = () =>{
    return (
        <div className='title-side-blog'>
            <div className='title-text-side'>

                <TitleHeading span='WHAT WE OFFER'
                              heading='Our Great Services'
                              paragraph='The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests.'
                              align='left'
                              color='#fff'
                />



            </div>
            <div className='cards-side-blog'>
                <FunctionCard src='./images/icons/calendar.svg' text='Opened 24/7' />
                <FunctionCard src='./images/icons/menu.svg' text='Special Menus' />
                <FunctionCard src='./images/icons/delivery.svg' text='Home Delivery' />
            </div>
        </div>
    )
}