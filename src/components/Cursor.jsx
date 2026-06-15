import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <>
      {/* The main glowing dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#38bdf8] rounded-full pointer-events-none z-[100] shadow-[0_0_10px_#38bdf8]"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      {/* The trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#0067b8] rounded-full pointer-events-none z-[100]"
        animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  )
}