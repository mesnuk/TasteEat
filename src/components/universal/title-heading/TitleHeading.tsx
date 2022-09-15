import React from "react";
import {TitleHeadingProps} from "./type";

  export const TitleHeading: React.FC<TitleHeadingProps> = ({
                                                           span ,
                                                           heading,
                                                           paragraph ,
                                                           align
                                                       }) => {
        return (
            <div className='title-heading-block' style={{textAlign: align}}>
                <span className='span-title'>{span}</span>
                <h2 className='h2-blocks'>{heading}</h2>
                <p className='p-card'>{paragraph}</p>
            </div>
        )
}