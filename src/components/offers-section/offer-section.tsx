import React from "react";
import {DiscountDishProps, PopularDishCardProps} from "./type";
import {SpecialDish} from "./special-dish";
import {PopularDishes} from "./popular-offers";


export const SectionOffer:React.FC<{
    discountDish : DiscountDishProps[],
    popularDish : PopularDishCardProps[]
}> = ({discountDish, popularDish}) => {
    return (
        <section className='section-discount'>

            <SpecialDish discountDish={discountDish} />
            <PopularDishes props={popularDish} />
        </section>
    )
}