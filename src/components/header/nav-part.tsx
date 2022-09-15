import React from 'react'
import {Link} from '../universal/button/linkA'
import {Btn} from '../universal/button/button'
import styled from "styled-components";


const Icons: React.FunctionComponent = ()=> {
 return (
     <div className="navigation-header-icons">
         <a href='https://www.instagram.com/andrijin.tus/'><img src="./images/icons/inst-logo.svg" alt="" className="social-media-icon" /></a>
         <a href='https://www.facebook.com/profile.php?id=100017272267301/'><img src="./images/icons/facebook-logo.svg" alt="" className="social-media-icon" /></a>
         <a href='https://twitter.com/SovtusAndjey'><img src="./images/icons/twiter-logo.svg" alt="" className="social-media-icon" /></a>
         <a href='https://www.pinterest.com/'><img src="./images/icons/printerst.svg" alt="" className="social-media-icon" /></a>
     </div>
 )
}

const Links : React.FunctionComponent = () => {
    return (
    <div className="navigation-header-buttons">
        <ul className="ul-navigation">
            <li><a href="/" className="link-navigation">Home</a></li>
            <li><a href="/" className="link-navigation">About us</a></li>
            <li><a href="/" className="link-navigation">Our Menu</a></li>
            <li><a href="/" className="link-navigation">Pages</a></li>
            <li><a href="/" className="link-navigation">Blog</a></li>
            <li><a href="/" className="link-navigation">ContactUs</a></li>
        </ul>
    </div>
    )
}

export const Navigation: React.FunctionComponent = () : JSX.Element =>  {
 return (
     <nav className="navigation-header">
         <Links />
         <Icons />
     </nav>
 )
}