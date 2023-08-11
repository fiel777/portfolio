import "./App.css";
import About from "./assets/About/About";
import Contact from "./assets/Contact/Contact";
import Footer from "./assets/Footer/Footer";
import Navbar from "./assets/Header/Navbar";
import Home from "./assets/Home/Home";
import Project from "./assets/Projects/Project";

function App() {
  return (
    <>
      <Navbar />
      <div className=" bg-slate-100 dark:text-white font-primary">
      <Home />
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
