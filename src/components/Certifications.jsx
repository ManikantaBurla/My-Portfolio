import { motion } from 'framer-motion'

export const Certifications = () => {
  const certsData = [
    { 
      title: "Python Essentials", 
      issuer: "Cisco", 
      year: "2024",
      image: "python-cert_page.jpg", // Make sure this matches your file name in the public folder
      link: "https://www.credly.com/badges/cd23ff61-b597-4333-b681-89eb6e725b57/linked_in_profile" 
    },
    { 
      title: "Responsive Web Design", 
      issuer: "freeCodeCamp", 
      year: "2024",
      image: "webdesign.jpg", 
      link: "https://www.freecodecamp.org/certification/manikantaburla/responsive-web-design" 
    },
    { 
      title: "AI / Machine Learning", 
      issuer: "Oracle", 
      year: "2024",
      image: "oracle(aiml).jpg", 
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=11C4CFF8582BCB9790314772F47525F61E1372AE3202E32CADF34250078DA87C" 
    },
    { 
      title: "DBMS Fundamentals", 
      issuer: "Scaler Academy", 
      year: "2024",
      image: "scalar-dbms.jpg", 
      link: "https://moonshot.scaler.com/s/sl/0uX2f_X8tx?_gl=1*53yfco*_gcl_au*MTM5MTU5ODE5OC4xNzgxMjQ0NTY0*FPAU*MjE0NDUyMTY5Mi4xNzgxMjQ0NTY0*_ga*NTcxNTE5NDA3LjE3NjEwNTA4ODI.*_ga_53S71ZZG1X*czE3ODEyNDQ1NjMkbzQkZzEkdDE3ODEyNDQ2NjgkajE1JGwwJGg3OTE5ODc0NDA." 
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center"
      >
        Credential Verification
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto justify-center">
        {certsData.map((cert, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-slate-800/40 border border-slate-700 rounded-3xl p-6 group hover:shadow-lg hover:shadow-[#0067b8]/20 hover:border-[#0067b8]/50 transition-all backdrop-blur-md flex flex-col h-full"
          >
            {/* Certificate Image Window */}
            <div className="aspect-[4/3] bg-slate-900 border border-slate-700 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
              <img 
                src={cert.image} 
                alt={`${cert.title} Certificate`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                // Fallback text if image isn't found
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-sm text-slate-500 font-mono">Image coming soon...</span>
            </div>

            {/* Text Details */}
            <h4 className="font-semibold text-white text-lg">{cert.title}</h4>
            <p className="text-sm text-slate-400 mb-6 flex-grow">{cert.issuer} • {cert.year}</p>
            
            {/* Clickable Verification Link */}
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-[#38bdf8] font-medium hover:text-white transition-colors"
            >
              Verify Credential <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}