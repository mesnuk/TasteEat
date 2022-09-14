import React from 'react'
import {Description} from './description-part'
import {ImageSide} from './image-part'

export const SectionWelcome: React.FunctionComponent  = () : JSX.Element => {
    return (
        <section className="section-welcome">

                <Description />
                <ImageSide />

        </section>
    )
}