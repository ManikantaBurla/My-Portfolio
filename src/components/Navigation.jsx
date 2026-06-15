import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT ME", path: "/about-me" },
    { name: "EDUCATION", path: "/education" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CERTIFICATIONS", path: "/certifications" },
    { name: "LEADERSHIP", path: "/leadership" },
    { name: "CONTACT ME", path: "/contact-me" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <Link to="/" className="text-white font-bold text-2xl tracking-tighter">
        &lt; M / &gt;
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-xs font-mono tracking-widest uppercase transition-colors ${
              location.pathname === link.path 
                ? "text-[#38bdf8]" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}