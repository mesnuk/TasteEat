import React from "react";
import {Btn} from "../universal/button/button";
import {BlogCardProps} from "./type";
import {TitleHeading} from "../universal/title-heading/TitleHeading";


export const CardLegend : React.FC<BlogCardProps> = (
    {
      bgSrc,
      link,
      firstSpan ,
      secondSpan,
      heading ,
      paragraph }) => {
    return (
        <div className='blog-legend-card'>
            <div style={{backgroundImage : `url(${bgSrc})`}} className='image-hovering-legend-card'>
                <Btn innerText='View More' />
            </div>
            <div className='blog-card-text-body'>
                <span className='span-title'>{firstSpan}</span>
                <span className='span-title'>{secondSpan}</span>
                <h2 className='h2-blocks'>{heading}</h2>
                <p className="p-card">{paragraph}</p>
            </div>
        </div>
    )
}

export const BlogSide: React.FC<{ blogCards : BlogCardProps[]; }> = ({blogCards}) =>{
    return (
        <div className='section-title-side'>
            <TitleHeading span='BLOG'
                          heading='Be First Who Read News'
                          paragraph='Explore the latest stories about our dishes, offers, events and future plans here.'
                          align='center' />
            <div className='cards-legend-side'>
                {blogCards.map( (el, i) => <CardLegend
                    key={i}
                    bgSrc={el.bgSrc}
                    firstSpan={el.firstSpan}
                    secondSpan={el.secondSpan}
                    paragraph={el.paragraph}
                    heading={el.heading}
                /> )}

            </div>
        </div>
    )
}