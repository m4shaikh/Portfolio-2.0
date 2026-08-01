import { Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar/Navbar"

import Home from "./Components/Home/Home"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"


function App() {

  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-secondary-800">
        <Navbar />

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </>
  )
}

export default App
