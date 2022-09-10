import React, {DOMElement} from 'react';
import Header from './components/header/header'
import {SectionWelcome} from './components/welcome-section/section-welcome'
import {SectionAboutUs} from './components/about-us-section/info'




export const App = () : JSX.Element =>{

  return (
    <div className="App">
      <Header />
      <SectionWelcome />
      <SectionAboutUs />
    </div>
  );
}


