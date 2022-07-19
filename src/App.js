
import NavBar from "./PortFolio_Container/Home/Navbar/NavBar";
import Profile from "./PortFolio_Container/Home/profile/Profile";
import About from "./PortFolio_Container/AboutMe/About";
import Skills from "./PortFolio_Container/Skills/Skils";
import Project from "./PortFolio_Container/Projects/Project";
import Contact from "./PortFolio_Container/Contact/Contact";
import TopScroll from "./PortFolio_Container/TopScroll/TopScroll";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Profile/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <TopScroll/>
    </div>
  );
}

export default App;
