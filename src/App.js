
import './App.css';
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Projects from "./Projects.js";

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>

     <Home></Home>
     <About></About>
     <Projects></Projects>
    </div>
  );
}

export default App;
