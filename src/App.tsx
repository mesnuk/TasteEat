import React, {useEffect, useState} from 'react';
import Header from './components/header/header'
import {SectionWelcome} from './components/welcome-section/section-welcome'
import {DataService} from "./services/data-service";
import {CardProps} from "./components/about-us-section/types";
import {SectionAboutUs} from "./components/about-us-section/info";




export const App = () : JSX.Element =>{
let [cardProps, setCardProps]: [CardProps[], any] = useState([]);

    const getCards = (): void => {
        new DataService().getCards()
            .then((res) => setCardProps(res))    }

    useEffect(() => {
        getCards();
    }, [])

  return (
    <div className="App">
      <Header />
      <SectionWelcome />
      <SectionAboutUs infoCards={cardProps} textCards={[]}/>
    </div>
  );
}


