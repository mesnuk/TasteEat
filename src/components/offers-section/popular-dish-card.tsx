import React from "react";
import {PopularDishCardProps} from "./type";

export const PopularDishCard: React.FC<{props : PopularDishCardProps}> = ({props}) => {

    return (
        <div className='popular-dish-card'>
            <img src={props.imageSrc} alt=""/>
            <div className='popular-dish-name'>
                <h2 className='h2-card-menu'>{props.name}</h2>
                <span className='menu-price'>${props.price}</span>
            </div>
            <p className='p-card'>{props.description}</p>
        </div>
    )
}