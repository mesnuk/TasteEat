import React from "react";
import {PopularDishCardProps} from "./type";
import {PopularDishCard} from "./popular-dish-card";
import {Btn} from "../universal/button/button";
import {TitleHeading} from "../universal/title-heading/TitleHeading";



export const PopularDishes:React.FC<{props : PopularDishCardProps[]}> = ({props}) => {
    return (
        <div className="popular-dish-side">
                <TitleHeading span='MENU'
                              heading='Our Offer dishes'
                              paragraph='There is a game between the waiters in restaurant to see who serves the food to<br /> each table fastest. That led to attempting the Guinness Record.'
                          align='center' />
            <div className='popular-cards-side'>
                {props.map( (el, i) => <PopularDishCard props={el} key={i}/>)}
            </div>
            <Btn innerText='See all dishes' colorHover='#E1B168' />

        </div>
    )
}