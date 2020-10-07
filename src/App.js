import React, { Component } from 'react';
import './style/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';
import Portfolio from './components/portfolio';


class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Header />
        <About  />
        <Resume /> 
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
