import { useState } from "react"
import { FaBars, FaX } from "react-icons/fa6"
import { Link, NavLink } from "react-router-dom"

function Header() {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative w-[95%] flex justify-between items-center p-2  text-white">
        <Link to="/" className="text-3xl font-bold mt-2.5 px-3">Omm
            <span className="text-blue-600">Dev</span>
        </Link>
        
        <nav className="hidden sm:flex gap-4 mt-2.5 px-3">
            <NavLink to="/" 
              className={({ isActive }) => 
                isActive ? "text-blue-600 text-2xl font-bold" : "text-2xl font-bold"} >
                    Home
            </NavLink>
            <NavLink to="/about" 
              className={({ isActive }) => 
                isActive ? "text-blue-600 text-2xl font-bold" : "text-2xl font-bold"} >
                    About
            </NavLink>
            <NavLink to="/projects" 
              className={({ isActive }) => 
                isActive ? "text-blue-600 text-2xl font-bold" : "text-2xl font-bold"} >
                    Projects
            </NavLink>
           <NavLink to="/contact" 
              className={({ isActive }) => 
                isActive ? "text-blue-600 text-2xl font-bold" : "text-2xl font-bold"} >
                    Contact
            </NavLink>
        </nav>

        { isOpen ? <FaX className="text-4xl mt-2.5 sm:hidden mx-3" 
        onClick={() => setIsOpen(false)}/>
        :<FaBars className="text-4xl mt-2.5 sm:hidden mx-3"
        onClick={() => setIsOpen(true)}/>
        }
        {
            isOpen ? 
            <div className="absolute top-20 px-6 py-6 w-full bg-slate-950 
            flex flex-col items-center content-center sm:hidden gap-6 transition-all duration-1000">
                <Link to="/" className="text-2xl font-bold">Home</Link>
                <Link to="/about" className="text-2xl font-bold">About</Link>
                <Link to="/projects" className="text-2xl font-bold">Projects</Link>
                <Link to="/contact" className="text-2xl font-bold">Contact</Link>
            </div> : ""
        }
        
    </header>
  )
}

export default Header