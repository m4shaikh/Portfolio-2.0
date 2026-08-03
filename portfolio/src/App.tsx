import { Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar/Navbar"

import Home from "./Components/Home/Home"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"


function App() {

  
  return (
    <div className="min-h-[100vh] h-auto bg-secondary-800 flex">
      <Navbar />

      <main className="flex-1 lg:ml-[60px] mb-[60px] lg:mb-0 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );

}

export default App
