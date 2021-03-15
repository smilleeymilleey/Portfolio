
import './App.css';
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>

     <Home></Home>
     <About></About>
     <Projects></Projects>
     <Contact></Contact>
    </div>
  );
}

export default App;
