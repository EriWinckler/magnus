import React from "react";
import "./style/App.scss";

// Components
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Certificates from "./components/certificates";
import Navigation from "./components/navigation";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Resume />
      <Certificates />
      <Skills />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
