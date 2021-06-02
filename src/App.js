import React, { useEffect } from "react";
import "./style/App.scss";

// Google Analytics
import ReactGA from "react-ga";

// Components
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Certificates from "./components/certificates";
import Navigation from "./components/navigation";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-180197702-1");
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Resume />
      <Certificates />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
