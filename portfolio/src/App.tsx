import { Route , Routes } from "react-router-dom"
import Home from "./Components/Home/Home"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/skills" element= {<Skills/>} />
        <Route path="/projects" element= {<Projects/>} />
        <Route path="/contact" element= {<Contact/>} />

      </Routes>
    </div>
  )
}

export default App
