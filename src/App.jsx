import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <header className="navbar">
        <Navbar />
      </header>
      <main className="main">
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
