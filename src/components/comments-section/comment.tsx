import React from "react";
import {CommentProps} from "./type";

const UpperImage: React.FC<{}> = () => {
    return (
        <img src="./images/quotes.svg" className='image-quotes-comment' />
    )
}

export const Comment : React.FC<CommentProps> = ({imageSrc, name, aboutMe, city}) => {
    return (
        <div className='comment'>
            <div className='heading-side-comment'>
                <div>
                    <img src={imageSrc} className='image-comment' />
                    <UpperImage />
                </div>
                <div className='name-side-comment'>
                    <h3 className='h3-comment-name h2-card-menu'>{name}</h3>
                    <span className='city-comment p-card'>{city}</span>

                </div>
            </div>

            <div className='body-side-comment'>
                <p className='p-about-me p-card'>{aboutMe}</p>
            </div>

        </div>
    )
}
