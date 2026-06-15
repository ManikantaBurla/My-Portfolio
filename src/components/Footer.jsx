export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-slate-950 text-slate-300 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-white">Manikanta Sai Burla</p>
          <p className="text-sm text-[#38bdf8] mt-1">Full-Stack Developer</p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm font-mono text-slate-400 mb-1">Direct Contact</p>
          <p className="text-white font-medium">+91 6300909838</p>
          <a href="mailto:burlamanikantasai@gmail.com" className="text-slate-400 hover:text-[#38bdf8] transition text-sm">
            burlamanikantasai@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}