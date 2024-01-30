import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hr from "./components/Hr";

// import Hero from './components/Hero'
import { NavBar } from "./components/NavBar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
  
      <div className="gap-4 mx-auto">
        <NavBar />
        <Hero />
        <About/>
        <Hr/>
        <Portfolio/>
        <Hr/>
        <Contact/>
        <Footer/>
      </div>

    </>
  );
}

export default App;
