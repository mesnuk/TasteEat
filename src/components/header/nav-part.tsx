import React from 'react'
import { NavLink } from "react-router-dom";


export const Icons: React.FunctionComponent = ()=> {
 return (
     <div className="navigation-header-icons">
         <a href='https://www.instagram.com/andrijin.tus/'><img src="./images/icons/inst-logo.svg" alt="" className="social-media-icon" /></a>
         <a href='https://www.facebook.com/profile.php?id=100017272267301/'><img src="./images/icons/facebook-logo.svg" alt="" className="social-media-icon" /></a>
         <a href='https://twitter.com/SovtusAndjey'><img src="./images/icons/twiter-logo.svg" alt="" className="social-media-icon" /></a>
         <a href='https://www.pinterest.com/'><img src="./images/icons/printerst.svg" alt="" className="social-media-icon" /></a>
     </div>
 )
}

export const NavLinks : React.FunctionComponent = () => {
    return (
    <div className="navigation-header-buttons">
        <ul className="ul-navigation">

            <li><NavLink to="/TasteEat/home"  className="link-navigation">Home</NavLink></li>
            <li><NavLink to="/TasteEat/about-us" className="link-navigation">About us</NavLink></li>
            <li><NavLink to="/TasteEat/menu" className="link-navigation">Our Menu</NavLink></li>
            <li><NavLink to="/TasteEat/pages" className="link-navigation">Pages</NavLink></li>
            <li><NavLink to="/TasteEat/blog" className="link-navigation">Blog</NavLink></li>
            <li><NavLink to="/TasteEat/contact-us" className="link-navigation">ContactUs</NavLink></li>

        </ul>
    </div>
    )
}

export const Navigation: React.FunctionComponent = () : JSX.Element =>  {
 return (
     <nav className="navigation-header">
         <NavLinks />
         <Icons/>
     </nav>
 )
}