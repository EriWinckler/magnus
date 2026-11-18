import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Skills from "./components/skills";
import { selectVariant } from "./content";

const App = () => {
  const variant = selectVariant(window.location.search);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <Header variant={variant} />
      <main id="main">
        <About variant={variant} />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
