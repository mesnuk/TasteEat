import React from 'react'
import {CardProps, JSONCardsProps, TextBlockProps} from "./types";
import {ShortInfoCard} from './short-info-card'
import { Description } from './description'



const Cards: React.FC<JSONCardsProps> = ( {arr}  ) => {
console.log(arr, 'e3');
    return (
        <div className='short-icon-side'>
            {arr.map( el => <ShortInfoCard key={el.key} heading={el.heading!}
                                             paragraph={el.paragraph!} imageSrc={el.imageSrc!} />) }
        </div>
    )
}



export const SectionAboutUs : React.FC<{
    infoCards: CardProps[];
    textCards: TextBlockProps[];

}> = ({infoCards, textCards}) => {

    return (
        <section className='section-about-us'>

            <Cards arr={infoCards} />
            <Description arr={textCards}/>

        </section>
    )
}
