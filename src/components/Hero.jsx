import { Code, User } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const Hero = () => {
  const title = "Manikanta Sai Burla".split("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Tracks the user's mouse to create the 3D Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
      
      {/* --- THE 3D MAGIC BACKGROUND --- */}
      {/* 1. Infinite Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] z-0 pointer-events-none"></div>
      
      {/* 2. Volumetric Glowing Orb (Cyan - Tracks with mouse) */}
      <motion.div 
        animate={{ 
          x: mousePosition.x * 0.04, 
          y: mousePosition.y * 0.04 
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 1.5 }}
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* 3. Volumetric Glowing Orb (Purple - Parallax counter-movement) */}
      <motion.div 
        animate={{ 
          x: mousePosition.x * -0.03, 
          y: mousePosition.y * -0.03 
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 1.5 }}
        className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none z-0"
      />
      {/* ------------------------------- */}

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-7xl items-center relative z-10 pt-20">
        
        {/* Left Side: Text Area */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-slate-400 font-light mb-2"
          >
            Hello, I'm
          </motion.p>
          
          <div className="flex flex-wrap mb-2">
            {title.map((letter, index) => (
              <motion.h1 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-xl"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.h1>
            ))}
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-2xl md:text-3xl font-light text-[#38bdf8] mb-6 cursor-default transform origin-left"
            whileHover={{
              color: "transparent",
              scale: 1.02,
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(to right, cyan, purple, pink, cyan)",
              backgroundPosition: ["0% 50%", "100% 50%"],
              transition: {
                backgroundPosition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
                color: { duration: 0.3 },
                scale: { duration: 0.3 }
              }
            }}
          >
            AIML Engineer
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="max-w-lg text-slate-400 text-lg mb-10 leading-relaxed"
          >
            "I engineer stunning web experiences and build machine learning models that solve real-world problems."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <a href="https://www.linkedin.com/in/manikantaburla" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-slate-200 transition-colors font-semibold shadow-lg shadow-white/10 hover:scale-105 transform duration-300">
              <User size={18} /> LinkedIn
            </a>
            <a href="https://github.com/Manikantaburla" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border border-slate-600 px-6 py-3 rounded-full flex items-center gap-2 hover:border-white transition-colors font-medium hover:bg-white/5 transform duration-300">
              <Code size={18} /> GitHub
            </a>
          </motion.div>
        </div>

        {/* Right Side: Image Placement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center md:justify-end items-center"
        >
          <div className="relative w-[320px] h-[450px] md:w-[480px] md:h-[600px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.1)] border border-slate-800/50 group">
            
            <img 
              src="/manipic.jpg" 
              alt="Manikanta Sai Burla" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}