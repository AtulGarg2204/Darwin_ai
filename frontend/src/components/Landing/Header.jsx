import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const links = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
    { to: "/pricing", text: "Pricing" },
    { to: "/dashboard", text: "Main Layout" },
  ];
  return (
    <header className="flex justify-between items-center py-3 border-b">
      <div className="flex items-center space-x-10 relative">
        
        {/* Logo and Name */}
        <div className="flex items-center space-x-2 ml-6">
          <svg 
            className="w-6 h-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 2L2 7L12 12L22 7L12 2Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M2 17L12 22L22 17" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M2 12L12 17L22 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-medium">darwin</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium">
            {links.map((link,index)=>{
              const isActive = location.pathname.startsWith(link.to)

              return (
                <li>
                  <Link key={`nav-${index}`} to={link.to} className={`hover:text-gray-500 transition-all ${isActive ? "text-gray-400" : ""}`}>{link.text}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      
      {/* Hamburger Button - visible on small screens */}
      <button className="md:hidden mr-6" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon/>
      </button>

      {isOpen && (
        <div className="absolute top-10 bg-white z-10 w-full p-6">
          
          <nav className="">
            <ul className="flex flex-col gap-6 text-2xl space-y-4 font-medium">
              {links.map((link,index)=>{
                const isActive = location.pathname.startsWith(link.to)
                return (
                  <li>
                    <Link key={`nav-${index}`} to={link.to} className={`hover:text-gray-500 transition-all ${isActive ? "text-gray-400" : ""}`}>{link.text}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      )}

      <div className="hidden md:block pr-6">
        <Link to={'/login'} className="bg-gray-800 px-3 py-1 rounded-xl text-white shadow-md hover:bg-slate-600 hover:scale-105 transition-all flex items-center justify-center">Get Started</Link>
      </div>
    </header>
  )
}

export default Header