import React from 'react'
import {Link} from '../universal/button/linkA'
import {Btn} from '../universal/button/button'

export const Title : React.FunctionComponent = () : JSX.Element => {
    return (
        <div className="logo-side">
            <div className="div-call-button">
                <Link innerText='Call - 123 456 789' href='tel:123 456 789' />
            </div>
            <div className="div-logo">
                <img src="./images/logo.svg" />
            </div>
            <div className="div-reservation-button">
                <Btn innerText='Reservation' />
            </div>
        </div>
    )
}