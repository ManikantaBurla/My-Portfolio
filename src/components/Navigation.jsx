import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT ME", path: "/about-me" },
    { name: "EDUCATION", path: "/education" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CERTIFICATIONS", path: "/certifications" },
    { name: "LEADERSHIP", path: "/leadership" },
    { name: "CONTACT ME", path: "/contact-me" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <Link to="/" className="text-white font-bold text-2xl tracking-tighter z-50">
        &lt; M / &gt;
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-xs font-mono tracking-widest uppercase transition-colors ${
              location.pathname === link.path ? "text-[#38bdf8]" : "text-slate-400 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-mono tracking-widest uppercase ${
                  location.pathname === link.path ? "text-[#38bdf8]" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
