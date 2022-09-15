import React from "react";
import {Btn} from "../universal/button/button";
import {TitleSide} from "../blog-section/titile-block-blog";
import {TitleHeading} from "../universal/title-heading/TitleHeading";

export const MenuAdvertising: React.FC<{}> = () => {
    return (
        <div className='menu-advertising'>
            <TitleHeading align='flex-start' span='MENU' heading='Try Our Special dishes' paragraph='Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area'/>

            <div className="div-advert-image">
                <img src='./images/menu-advert.svg' alt='img' className='image-advert'/>
                <Btn innerText={'See All Dishes'} colorHover='#E1B168' />
            </div>
        </div>
    )
}