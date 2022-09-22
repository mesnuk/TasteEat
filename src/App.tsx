import React, {useEffect, useState} from 'react';
import Header from './components/header/header';
import "@fontsource/cormorant-infant";
import "@fontsource/josefin-sans";
import {SectionWelcome} from './components/welcome-section/section-welcome'
import {DataService} from "./services/data-service";
import {CardProps, TextBlockProps} from "./components/about-us-section/types";
import {SectionAboutUs} from "./components/about-us-section/info";
import {SectionMenu} from "./components/menu-section/menu";
import {MenuCardProps} from "./components/menu-section/type";
import {CommentProps} from "./components/comments-section/type";
import {SectionComment} from "./components/comments-section/section-comment";
import {DiscountDishProps, PopularDishCardProps} from "./components/offers-section/type";
import {SectionOffer} from "./components/offers-section/offer-section";
import {SectionBlog} from "./components/blog-section/blog-section";
import {BlogCardProps} from "./components/blog-section/type";
import {SectionForm} from "./components/form-section/form-section";
import {SectionFooter} from "./components/footer/footer";

import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";





const discountDish: DiscountDishProps[] = [
    {
        "name": "Chicken Burger",
        "description" : "Chicken burger with the tasty toppings and leaves.",
        "price" : 10,
        "discount" : 50,
        "imageSrc" : "./images/dish/burger.svg",
        "bgMainSrc" : "./images/backgrounds/background-disc-card1.svg",
        "bgPriceSrc" : "./images/backgrounds/price-first.svg"


    },
    {
        "name": "Chicken Pizza",
        "description" : "Pizza with multiple flavor and the toping are mixed.",
        "price" : 9,
        "discount" : 50,
        "imageSrc" : "./images/dish/pizza.svg",
        "bgMainSrc" : "./images/backgrounds/background-disc-card2.svg",
        "bgPriceSrc" : "./images/backgrounds/price-second.svg"
    }
];
const blogCards: BlogCardProps[] = [
    {
        "bgSrc" : "./images/backgrounds/fist-card.svg",
        "link" : "",
        "firstSpan" : "Delicious" ,
        "secondSpan" : "March 19, 2022",
        "heading" : "The Legend of US Cuisine: The Story of Hungry People",
        "paragraph" : "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality."

    },
    {
        "bgSrc" : "./images/backgrounds/second-card.svg",
        "link" : "",
        "firstSpan" : "Cooking" ,
        "secondSpan" : "March 19, 2022",
        "heading" : "The Most Popular Delicious Food of Mediterranean Cuisine",
        "paragraph" : "Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality."

    }

];


export const App = () : JSX.Element =>{


const [cardProps, setCardProps]: [CardProps[], any] = useState([]);
const [textProps, setTextProps]: [TextBlockProps[], any] = useState([]);
const [menuCardProps, setMenuCardProps]: [MenuCardProps[], any] = useState([]);
const [commentCardProps, setCommentCardProps]: [CommentProps[], any] = useState([]);
const [popularDishCardProps, setPopularDishCardProps]: [PopularDishCardProps[], any] = useState([]);

    const getInfoCards = (): void => {
        new DataService().getInfoCards()
            .then((res) => setCardProps(res))    }
    const getTextCards = (): void => {
        new DataService().getTextCards()
            .then((res) => setTextProps(res))    }
    const getMenuCards = (): void => {
        new DataService().getMenuCards()
            .then((res) => setMenuCardProps(res))    }
    const getCommentsCards = (): void => {
            new DataService().getCommentsCards()
                .then((res) => setCommentCardProps(res))    }
    const getPopularDishCards = (): void => {
            new DataService().getPopularDishCards()
                .then((res) => setPopularDishCardProps(res))    }

    useEffect(() => {
        getInfoCards();
        getTextCards();
        getMenuCards();
        getCommentsCards();
        getPopularDishCards();
    }, [])








  return (
    <>
      <Router>
          <Header />
          <Switch>
              <Redirect from='/' exact to='/home' />
              <Route path='/home'>
                  <SectionWelcome />
              </Route>
              <Route path='/about-us'>
                  <SectionAboutUs infoCards={cardProps} textCards={textProps} />
              </Route>
              <Route path='/menu'>
                  <SectionMenu menuCards={menuCardProps}/>
              </Route>
              <Route path='/about-us'>
                  <SectionComment arr={commentCardProps} />
              </Route>
              <Route path='/pages'>
                  <SectionOffer discountDish={discountDish} popularDish={popularDishCardProps} />
              </Route>
              <Route path='/blog'>
                  <SectionBlog blogCards={blogCards} />
              </Route>
              <Route path='/contact-us'>
                  <SectionForm />
              </Route>
          </Switch>
          <SectionFooter />
      </Router>


    </>
  );
}


