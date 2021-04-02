
import './App.css';
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Projects from "./Projects";
import Footer from "./Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Qualification from "./Qualification.js";

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Qualification></Qualification>
     <Footer></Footer>
    </div>
  );
}

export default App;
