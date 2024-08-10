import Navbar from "./Components/NavBar/navbar";
import Intro from './Components/Intro/intro';
import Skills from './Components/Skills/skills';
import Works from './Components/Works/works';
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import Resume from "./Components/Resume/Resume";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Resume/>
      <Contact />
      <Footer/>
  
    </div>
  );
}

export default App;
