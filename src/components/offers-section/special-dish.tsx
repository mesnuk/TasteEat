import React from "react";
import {DiscountDishProps} from "./type";
import {SpecialOfferCard} from "./low-price-card";
import {TitleHeading} from "../universal/title-heading/TitleHeading";





export const SpecialDish: React.FC<{discountDish : DiscountDishProps[]}> = ({discountDish}) => {
    return (
        <div className='offer-section'>
            <img src="./images/lamps.svg" alt="lamps" className='image-section'/>

            <TitleHeading span='OFFER'
                          heading='Popular Dishes'
                          paragraph='There is a game between the waiters in restaurant to see who serves the food to<br /> the dishes are in offers use it based on hunger.'
                          align='center' />
            <div className='discount-dish-side'>
                {
                    discountDish.map( (el, i) => <SpecialOfferCard discountDish={el} key={i} />)
                }
            </div>
        </div>
    )
}