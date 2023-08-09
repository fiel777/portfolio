import "./App.css";
import About from "./assets/About/About";
import Navbar from "./assets/Header/Navbar";
import Home from "./assets/Home/Home";
import Project from "./assets/Projects/Project";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Project/>
    </>
  );
}

export default App;
