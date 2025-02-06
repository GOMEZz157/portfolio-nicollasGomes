import About from "./components/About"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;

