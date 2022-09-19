import React, {memo} from 'react'
import {Logo} from "../header/title-part";
import {Icons} from "../header/nav-part";


export const TitleFooter : React.FunctionComponent =  () : JSX.Element => {
    return (
        <>
            <div className='footer-title-side'>
                <span className='hashTag'> #TheTastEat</span>
                <Logo />
                <Icons />
            </div>
            <div className='under-title-footer-side'>
                <span></span>
                <span className='under-logo-text p-card'>Join our mailing list for updates, Get news & offers events.</span>
                <span className='span-title'>working hours</span>
            </div>
        </>
        )
}

