import React, {useEffect, useState} from 'react'
import {CardProps, TextBlockProps, JSONCardsProps} from "./types";
import {ShortInfoCard} from './short-info-card'
import {Description, TextBlock} from './description'

import shortTextCards from '../../data/text-cards.json'
import shortInfoCards from '../../data/short-info-cards.json'

import axios from "axios";




const textCards: TextBlockProps[] = JSON.parse(JSON.stringify(shortTextCards));
const infoCards: CardProps[] = JSON.parse(JSON.stringify(shortInfoCards))

class DataService {
    getData() {
        return axios.get('../../data/short-info-cards.json', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        } ).then(response => console.log(response))
    }
}




const Cards: React.FC<JSONCardsProps> = ( {arr}  ) => {
    const k = new DataService().getData();





    return (
        <div className='short-icon-side'>
            {arr.map( el => <ShortInfoCard key={el.key} heading={el.heading!}
                                             paragraph={el.paragraph!} imageSrc={el.imageSrc!} />) }
        </div>
    )
}



export const SectionAboutUs : React.FC<{}> = () => {


    return (
        <section className='section-about-us'>

            <Cards arr={infoCards} />
            <Description arr={textCards}/>

        </section>
    )
}
