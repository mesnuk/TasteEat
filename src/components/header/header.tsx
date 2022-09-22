import React, {memo} from 'react'
import {Title} from './title-part'
import {Navigation} from './nav-part'



const Header : React.FunctionComponent =  () : JSX.Element => {
    return (
        <header className='header'>

            <Title />
            <Navigation />
        </header>
    )
}
export default memo(Header);
