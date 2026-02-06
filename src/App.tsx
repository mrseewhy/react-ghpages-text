import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/contact"

const App = () => {
  return (
    <div>
      <nav className="text-red-700 font-bold">
        <Link to={'/'}>Home </Link>
        <Link to={'/about'}>About </Link>
        <Link to={'/contact'}>Contact </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <div>This is the footer</div>

    </div>
  )
}

export default App