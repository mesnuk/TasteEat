import React from "react";
import {Btn} from "../universal/button/button";

export const MenuAdvertising: React.FC<{}> = () => {
    return (
        <div className='menu-advertising'>
            <span className='span-title'>MENU</span>
            <h2 className='h2-blocks h2-advertising'>Try Our Special dishes</h2>
            <p className='p-card'>Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.
            </p>

            <div className="div-advert-image">
                <img src='./images/menu-advert.svg' alt='img' className='image-advert'/>
                <Btn innerText={'See All Dishes'} colorHover='#E1B168' />
            </div>
        </div>
    )
}