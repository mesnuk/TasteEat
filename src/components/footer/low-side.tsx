import React, {memo} from 'react'


export const FooterLinks : React.FunctionComponent =  () : JSX.Element => {
    return (
        <ul className="links-footer">
            <li><a href="" className='decorate-text-footer'>Styleguide</a></li>
            <li><a href="" className='decorate-text-footer'>Licenses</a></li>
            <li><a href="" className='decorate-text-footer'>Protected</a></li>
            <li><a href="" className='decorate-text-footer'>Not Found</a></li>
        </ul>
            )
}



export const Footer : React.FunctionComponent =  () : JSX.Element => {
    return (
        <footer className='footer'>
           <p className='p-card'>© Copyright - TastEat | Designed by
               <span className='decorate-text-footer'>  VictorFlow</span>
               - Powered by
               <span className='decorate-text-footer'>  Webflow</span>
           </p>
            <FooterLinks />
        </footer>
    )
}
