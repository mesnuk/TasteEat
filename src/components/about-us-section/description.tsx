import React from "react";
import {TextBlockProps, JSONTextBlockProps} from "./types";




export const TextBlock : React.FC<TextBlockProps> = ({innerH2, innerParagraph}) => {
    return (
        <div className='text-card'>
            <h2 className='h2-blocks'>{innerH2}</h2>
            <p className='p-card'>{innerParagraph}</p>
        </div>
    )
}

export const Signature: React.FC<{}> = () => {
    return (
        <div className='signature'>
            <h3 className='h3-signature'>JOSEFINE</h3>
            <img src='./images/signature.svg' alt='signature' />
        </div>
    )
}

export const Description : React.FC<JSONTextBlockProps> = ({arr}) => {
    return (
        <div className="section-about-us-description">
            <div className='image-side-about-us'>
                <img src='./images/about-us-img.jpg' alt='img'/>
            </div>
            <div className='text-side-about-us'>
                {
                   arr.map( el => <TextBlock key={el.key} innerH2={el.innerH2} innerParagraph={el.innerParagraph} />)
                }
                <Signature />
            </div>

        </div>
    )
} ;