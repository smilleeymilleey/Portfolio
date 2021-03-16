
import './App.css';
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>

     <Home></Home>
     <About></About>
     <Projects></Projects>
     <Footer></Footer>
    </div>
  );
}

export default App;
