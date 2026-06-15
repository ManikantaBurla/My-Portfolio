import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SiJavascript, SiFlask, SiMysql } from 'react-icons/si'
import { FaHtml5, FaCss3Alt, FaPython, FaPhp, FaGithub } from 'react-icons/fa'

export const Projects = () => {

  const projectsData = [
    {
      title: "Mani Worldstream",
      type: "Full-Stack Web App",
      description: "A robust streaming website featuring a stunning frontend UI paired with a reliable PHP backend.",
      skills: [
        { name: "PHP", icon: <FaPhp /> }, 
        { name: "MySQL", icon: <SiMysql /> }, 
        { name: "HTML5", icon: <FaHtml5 /> }, 
        { name: "CSS3", icon: <FaCss3Alt /> }, 
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      githubLink: "https://github.com/ManikantaBurla/Mani-WorldStream.git",
      previewLink: "https://mani-worldstream.onrender.com"
    },
    {
      title: "Heart Disease Prediction",
      type: "Machine Learning / API",
      description: "A clinical predictive tool leveraging a Logistic Regression model integrated with a Flask frontend.",
      skills: [
        { name: "Python", icon: <FaPython /> }, 
        { name: "Flask", icon: <SiFlask /> },
        { name: "Frontend", icon: <FaHtml5 /> } 
      ],
      githubLink: "https://github.com/ManikantaBurla/heart-disease-portal.git",
      previewLink: "https://heart-disease-portal.onrender.com/"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 relative z-10 overflow-hidden">
      
      {/* Heading Animation Kept Intact */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center"
      >
        Featured Engineering
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projectsData.map((proj, i) => (
          
          <div key={i} className="h-full">
            {/* Standard Static Card with a simple CSS hover lift */}
            <div className="glass-card p-10 rounded-3xl bg-slate-800/80 shadow-2xl border border-slate-700 flex flex-col h-full backdrop-blur-xl hover:-translate-y-2 transition-transform duration-300">
              
              {/* Header Section */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#38bdf8] bg-[#0067b8]/20 px-3 py-1 rounded-full">{proj.type}</span>
                  <h3 className="text-3xl font-bold mt-4 text-white">{proj.title}</h3>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-slate-300 text-base mb-8 leading-relaxed flex-grow">
                {proj.description}
              </p>
              
              {/* Inline Tech Stack */}
              <div className="mb-8">
                <p className="text-sm text-slate-400 font-semibold mb-3">Technologies</p>
                <div className="flex flex-wrap gap-3">
                  {proj.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-900/50 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 transition-colors" title={skill.name}>
                      <span className="text-lg">{skill.icon}</span>
                      <span className="hidden sm:inline-block">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Buttons - Now 100% Clickable */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-700/50 relative z-20">
                
                <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-700 text-white py-3 rounded-xl transition-colors border border-slate-700 hover:border-slate-500 font-medium text-sm cursor-pointer">
                  <FaGithub size={18} /> Source Code
                </a>
                
                <a href={proj.previewLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#0067b8] hover:bg-blue-600 text-white py-3 rounded-xl transition-colors shadow-lg shadow-blue-900/20 font-medium text-sm cursor-pointer">
                  <ExternalLink size={18} /> Live Preview
                </a>

              </div>

            </div>
          </div>

        ))}
      </div>
    </section>
  )
}