import React, {useEffect, useState} from 'react';
import Header from './components/header/header'
import {SectionWelcome} from './components/welcome-section/section-welcome'
import {DataService} from "./services/data-service";
import {CardProps, TextBlockProps} from "./components/about-us-section/types";
import {SectionAboutUs} from "./components/about-us-section/info";
import {SectionMenu} from "./components/menu-section/menu";
import {MenuCardProps} from "./components/menu-section/type";




export const App = () : JSX.Element =>{


const [cardProps, setCardProps]: [CardProps[], any] = useState([]);
const [textProps, setTextProps]: [TextBlockProps[], any] = useState([]);
const [menuCardProps, setMenuCardProps]: [MenuCardProps[], any] = useState([]);
    const getInfoCards = (): void => {
        new DataService().getInfoCards()
            .then((res) => setCardProps(res))    }
    const getTextCards = (): void => {
        new DataService().getTextCards()
            .then((res) => setTextProps(res))    }
    const getMenuCards = (): void => {
        new DataService().getMenuCards()
            .then((res) => setMenuCardProps(res))    }



    useEffect(() => {
        getInfoCards();
        getTextCards();
        getMenuCards();

    }, [])


  return (
    <div className="App">
      <Header />
      <SectionWelcome />
      <SectionAboutUs infoCards={cardProps} textCards={textProps} />
      <SectionMenu menuCards={menuCardProps}/>
    </div>
  );
}


