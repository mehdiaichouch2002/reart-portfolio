import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ResumeModalProvider } from "./context/ResumeModalContext";
import { LanguageProvider } from "./context/LanguageContext";
import ResumeLanguageModal from "./components/common/ResumeLanguageModal";
import AIChatAssistant from "./components/AIChatAssistant";

function App() {
  return (
    <LanguageProvider>
      <ResumeModalProvider>
        <div>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:bg-fg focus:text-canvas focus:px-4 focus:py-2 focus:rounded-md font-sans">
            Skip to content
          </a>
          <NavBar />
          <main id="main">
            <Home />
            <About />
            <Portfolio />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
        <ResumeLanguageModal />
        <AIChatAssistant />
      </ResumeModalProvider>
    </LanguageProvider>
  );
}

export default App;
