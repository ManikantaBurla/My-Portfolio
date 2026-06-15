import { motion } from 'framer-motion'
import { Award, Users, Target, Zap, Bot, Mail, Trophy } from 'lucide-react'

export const Leadership = () => {
  const experiences = [
    {
      title: "Esports & Tournament Operations",
      org: "UU Battleground / FF",
      desc: "Directed large-scale regional gaming tournaments. Built automated Google Forms registration systems and integrated email automation to streamline player onboarding, reducing manual admin time by 70%.",
      icon: <Trophy className="text-cyan-400" size={24} />
    },
    {
      title: "Tech Club Coordinator",
      org: "College Tech Clubs",
      desc: "Led a cross-functional team of 15+ student developers. Managed member engagement, event roadmaps, and technical workshops, fostering a culture of collaborative problem-solving.",
      icon: <Users className="text-purple-400" size={24} />
    },
    {
      title: "Operational Automation",
      org: "Freelance / Projects",
      desc: "Engineered scalable workflows connecting Google Forms data to automated email triggers. This custom automation reduced communication latency for community events, ensuring 100% timely updates for participants.",
      icon: <Bot className="text-pink-400" size={24} />
    },
    {
      title: "Regional Badminton Tournaments",
      org: "Community Sports Lead",
      desc: "Successfully managed regional sports events, coordinating player brackets, venue logistics, and volunteer teams. Demonstrated high-pressure decision making and real-time conflict management.",
      icon: <Target className="text-emerald-400" size={24} />
    }
  ]

  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-[#38bdf8] font-mono text-sm tracking-widest uppercase mb-4 block">
            // Driving Results Through Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Keyboard.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-slate-600 transition-all"
            >
              <div className="mb-6">{exp.icon}</div>
              <h3 className="text-white font-bold text-xl mb-1">{exp.title}</h3>
              <span className="text-[#38bdf8] font-mono text-xs block mb-4">{exp.org}</span>
              <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}