import React from "react";
import {MenuCardProps} from "./type";



export const MenuCard : React.FC<MenuCardProps> = ({name,
                                                       description,
                                                       imageSrc,
                                                       price,
                                                       type}) => {

    return (
        <div className='menu-card'>

            <div className='text-body-menu-card'>
                <img className='dish-icon' alt='dish' src={imageSrc} />
                <div className='description-menu-card'>
                    <h2 className='h2-card-menu'>{name}</h2>
                    <p className='p-card p-menu'>{description}</p>
                </div>
                <span className='merge-line'></span>
                <span className='menu-price'>{price}</span>
            </div>

        </div>
    )
}