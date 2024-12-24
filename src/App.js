import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from './components/Footer'
function App() {
  return (
    <div className="select-none">
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <SocialLinks/>
      <Footer/>
    </div>
  );
}

export default App;
