import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: "system-ui", background: "#0f0f0f", color: "#fff" }}>
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
