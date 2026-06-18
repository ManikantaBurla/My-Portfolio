import { motion } from 'framer-motion'
import { Terminal, Cpu, Layout } from 'lucide-react'

export const AboutMe = () => {
  return (
    <section 
      // Changed back to min-h-screen and flex-col to ensure we have enough height to show your face AND the desk
      className="min-h-screen w-full pt-32 pb-24 px-6 md:px-12 relative overflow-hidden flex items-center bg-[#0a0a0a]"
      style={{
        // The dark gradient overlay ensures your white text is perfectly readable
        backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.95)), url('/aboutme.jpg')`,
        backgroundSize: 'cover',
        // 'center center' locks your face and the laptop right in the middle of the view
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        // This makes the background image stay still while the page scrolls (Parallax effect!)
        backgroundAttachment: 'fixed', 
      }}
    >
      
      {/* Background Ambient Glows (Optional, adds a subtle tech vibe) */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10 w-full mt-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[#38bdf8] font-mono text-sm tracking-widest uppercase mb-4 block">
            // The Architect Behind the Code
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Mani.</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Main Narrative */}
          <div className="md:col-span-8 space-y-8 text-slate-300 text-lg leading-relaxed drop-shadow-md">
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >I am a passionate developer driven by the desire to solve complex problems through programming and build engaging digital experiences. Whether I am engineering a machine learning model for heart disease prediction to tackle critical data challenges, or channeling my creativity into designing high-performance web applications like Mani-Worldstream, I thrive on turning ambitious ideas into functional reality.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
             Beyond the screen, I am deeply committed to continuous personality development and maintaining a highly disciplined lifestyle. I find my balance through regular gym sessions, playing badminton, and expressing myself through music and dance. These pursuits keep me energized and have taught me the undeniable power of consistency. I believe in myself, and I apply that same unwavering dedication to my engineering career.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My journey in software development is defined by continuous growth. I actively embrace my errors and failures, viewing them not as setbacks, but as the essential experiences that refine my skills. Every bug I resolve and every architectural challenge I overcome makes me a more adaptable, resilient, and capable engineer.
            </motion.p>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="md:col-span-4 space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all shadow-xl"
            >
              <Layout className="text-cyan-400 mb-4" size={28} />
              <h3 className="text-white font-semibold mb-2">Frontend Engineering</h3>
              <p className="text-sm text-slate-300">Crafting immersive, high-performance UIs using React, Vite, and Framer Motion.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl hover:border-purple-500/50 hover:bg-slate-900/60 transition-all shadow-xl"
            >
              <Terminal className="text-purple-400 mb-4" size={28} />
              <h3 className="text-white font-semibold mb-2">Backend & APIs</h3>
              <p className="text-sm text-slate-300">Building robust server architectures with PHP, Python, and Flask integrations.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl hover:border-pink-500/50 hover:bg-slate-900/60 transition-all shadow-xl"
            >
              <Cpu className="text-pink-400 mb-4" size={28} />
              <h3 className="text-white font-semibold mb-2">Machine Learning</h3>
              <p className="text-sm text-slate-300">Deploying predictive models and exploring advanced prompt engineering.</p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}