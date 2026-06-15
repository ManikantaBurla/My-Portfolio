import { motion } from 'framer-motion'
import { Mail, Phone, Terminal } from 'lucide-react'

// Custom lightweight SVG components for brand icons
const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/>
    <path d="M12 18s-3 2-4-1-2-2-2-2"/>
  </svg>
)

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const WhatsAppIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)

export const Contact = () => {
  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-3xl mx-auto relative z-10 w-full text-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-[#38bdf8] font-mono text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <Terminal size={16} /> Initiate Connection
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg mb-6">
            Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">me.</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Ready to boost your company with my excellence. Reach out directly through any of the channels below.
          </p>
        </motion.div>

        {/* Direct Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
          
          {/* Email Card */}
          <motion.a 
            href="mailto:burlamanikantasai@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all group shadow-xl"
          >
            <div className="bg-slate-950 p-4 rounded-xl group-hover:bg-cyan-500/10 transition-colors">
              <Mail size={24} className="text-cyan-400" />
            </div>
            <div>
              <span className="block text-sm text-slate-400 font-mono mb-1">Email</span>
              <span className="block text-slate-200 font-medium break-all">burlamanikantasai<br/>@gmail.com</span>
            </div>
          </motion.a>

          {/* Direct Phone Card */}
          <motion.a 
            href="tel:+916300909838"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-purple-500/50 hover:bg-slate-800/80 transition-all group shadow-xl"
          >
            <div className="bg-slate-950 p-4 rounded-xl group-hover:bg-purple-500/10 transition-colors">
              <Phone size={24} className="text-purple-400" />
            </div>
            <div>
              <span className="block text-sm text-slate-400 font-mono mb-1">Direct Call</span>
              <span className="block text-slate-200 font-medium">+91 6300909838</span>
            </div>
          </motion.a>

        </div>

        {/* Social & Messaging Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 pt-4"
        >
          {/* WhatsApp Button */}
          <a href="http://wa.me/6300909838" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 px-6 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1 font-semibold">
            <WhatsAppIcon size={24} /> WhatsApp
          </a>

          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com/in/manikantaburla" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white border border-[#0077b5]/30 px-6 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1 font-semibold">
            <LinkedinIcon size={24} /> LinkedIn
          </a>

          {/* GitHub Button */}
          <a href="https://github.com/Manikantaburla" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-800/50 text-white hover:bg-white hover:text-black border border-slate-700 px-6 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1 font-semibold">
            <GithubIcon size={24} /> GitHub
          </a>
        </motion.div>

      </div>
    </section>
  )
}