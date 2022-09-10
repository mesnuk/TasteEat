import React from 'react'

import {CardProps} from "./types";

export const ShortInfoCard : React.FC<CardProps> = ({heading, paragraph, imageSrc}) => {
    return (
        <div className='short-info-card'>
            <div className='div-around-image'>
                <img className='image-short-card' src={imageSrc} alt="icon"/>
            </div>
            <div className='text-block'>
                <h2 className='h2-card'>{heading}</h2>
                <p className='p-card'>{paragraph}</p>
            </div>
        </div>
    )
}


