// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FocusAreas from "./components/FocusAreas";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-slate-50 dark:bg-gray-900 text-slate-800 dark:text-slate-100">
        <Navbar />
        <Hero />
        <About />
        <FocusAreas />
        <Services />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;