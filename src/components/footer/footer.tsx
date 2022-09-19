import React, {memo} from 'react'
import {TitleFooter} from "./title-side";
import {EmailSubSide} from "./nav-side";
import {Footer} from "./low-side";


export const SectionFooter : React.FunctionComponent =  () : JSX.Element => {
    return (
        <section className='footer-section'>
            <div className='upper-side'>
                <TitleFooter />
                <EmailSubSide />
            </div>
            <Footer />
        </section>
    )
}