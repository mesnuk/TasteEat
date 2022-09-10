import React from 'react'
import {Btn} from '../universal/button/button'


export const Description : React.FunctionComponent  = () : JSX.Element => {
    return (
    <div className="section-welcome-description">
        <h1 className="h1-welcome">Welcome to
            Restaurant
            </h1>
        <p className="p-welcome">The people, food and the prime locations make the perfect place good friends & family to come together and have great time.
            </p>
        <Btn innerText='View Menu' colorHover="#E1B168"/>
    </div>
    )
}
