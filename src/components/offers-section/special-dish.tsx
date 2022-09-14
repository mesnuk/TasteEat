import React from "react";
import {DiscountDishProps} from "./type";
import {SpecialOfferCard} from "./low-price-card";





export const SpecialDish: React.FC<{discountDish : DiscountDishProps[]}> = ({discountDish}) => {
    return (
        <div className='offer-section'>
            <img src="./images/lamps.svg" alt="lamps" className='image-section'/>
            <span className='span-title'>OFFER</span>
            <h2 className='h2-blocks'>Popular Dishes</h2>
            <p className='p-card'>There is a game between the waiters in restaurant to see who serves the food to<br /> the dishes are in offers use it based on hunger.</p>
            <div className='discount-dish-side'>
                {
                    discountDish.map( (el, i) => <SpecialOfferCard discountDish={el} key={i} />)
                }
            </div>
        </div>
    )
}