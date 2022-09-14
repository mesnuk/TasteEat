import React from "react";
import {HeaderSectionComments} from "./heading";
import {CommentProps} from "./type";
import {Comment} from "./comment";


import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from 'react-alice-carousel';

const Comments: React.FC<{props: CommentProps[] }>= ({props}) => {
    const responsiveConfig = {
        0: {
            items: 1,
        },
        1024: {
            items: 3
        }
    };

    return (
        <AliceCarousel
                        controlsStrategy='responsive'
                        responsive={ responsiveConfig }
                        animationDuration={800}
                        mouseTracking
                        items={
            props.map((el, i) => <Comment key={i}
                                          imageSrc={el.imageSrc}
                                          name={el.name}
                                          aboutMe={el.aboutMe}
                                          city={el.city} />)
        } />
    )
}

export const SectionComment : React.FC<{arr : CommentProps[]}> = ({arr}) => {
    return (
        <section className='section-comments'>
            <HeaderSectionComments />
            <div className='carousel'>
                <Comments props={arr} />
            </div>
        </section>

    )
}