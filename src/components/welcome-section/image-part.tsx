import React from 'react'

export const ImageSide: React.FunctionComponent  = () : JSX.Element => {
    return (
        <div className="section-welcome-image">
            <img className="image-welcome" src='./images/welcome-image.svg' />
            <img className="part-image-welcome" src='./images/welcome-image-part.svg' />
        </div>
    )
}
