import React from "react";
import {DiscountDishProps} from "./type";

export const SpecialOfferCard: React.FC<{discountDish : DiscountDishProps}> = ({discountDish}) => {
    return(
        <div className='special-offer-card' style={{backgroundImage: `url(${discountDish.bgMainSrc})`}}>
            <div className='offer-card-info-side'>
                <div id={discountDish.name.split(' ')[1].toLowerCase()} className='price-side-offer-card' style={{backgroundImage: `url(${discountDish.bgPriceSrc})`}}>

                    <span className='price-offer'> Only</span>
                    <span className='price-offer'> ${discountDish.price}</span>
                </div>

                <span className='discount'>{discountDish.discount}% offer Going</span>

                <div className='text-body-offer-card'>
                    <h2 className="h2-blocks">{discountDish.name}</h2>
                    <p className="p-card">{discountDish.description}</p>
                </div>
            </div>
            <img src={discountDish.imageSrc} alt="special-offer-image"/>
        </div>
    )
}