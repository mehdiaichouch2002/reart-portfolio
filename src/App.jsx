import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import { ResumeModalProvider } from "./context/ResumeModalContext";
import ResumeLanguageModal from "./components/common/ResumeLanguageModal";

function App() {
  return (
    <ResumeModalProvider>
      <div className="select-none">
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
      <ResumeLanguageModal />
    </ResumeModalProvider>
  );
}

export default App;
