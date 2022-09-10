import React, {useEffect, useState} from 'react';
import Header from './components/header/header'
import {SectionWelcome} from './components/welcome-section/section-welcome'
import {DataService} from "./services/data-service";
import {CardProps, TextBlockProps} from "./components/about-us-section/types";
import {SectionAboutUs} from "./components/about-us-section/info";




export const App = () : JSX.Element =>{
const [cardProps, setCardProps]: [CardProps[], any] = useState([]);
const [textProps, setTextProps]: [TextBlockProps[], any] = useState([]);

    const getInfoCards = (): void => {
        new DataService().getInfoCards()
            .then((res) => setCardProps(res))    }

    const getTextCards = (): void => {
        new DataService().getTextCards()
            .then((res) => setTextProps(res))    }

    useEffect(() => {
        getInfoCards();
        getTextCards();

    }, [])

  return (
    <div className="App">
      <Header />
      <SectionWelcome />
      <SectionAboutUs infoCards={cardProps} textCards={textProps} />
    </div>
  );
}


