import React from "react";

export const SpecialOfferCard: React.FC<{}> = () => {
    return(
        <div className='special-offer-card'>
            <div className='offer-card-info-side'>
                <div className='price-side-offer-card'>
                    <span className='price-offer'></span>
                </div>

                <span className='discount'></span>

                <div className='text-body-offer-card'>
                    <h2 className="h2-blocks"></h2>
                    <p className="p-card"></p>
                </div>
            </div>
            <img src="./images/dish/burger.svg" alt="special-offer-image"/>
        </div>
    )
}