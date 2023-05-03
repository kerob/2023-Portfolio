import { useState, useEffect } from "react";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <main className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <Navbar />
          </header>
          {/* <main className="content-container"> */}
          <Hero />
          <About />
          <Portfolio />
          <Contact />
          {/* </main> */}
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
