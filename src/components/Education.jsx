import { motion } from 'framer-motion'
import { GraduationCap, Building2 } from 'lucide-react'

export const Education = () => {
  const eduData = [
    {
      title: "Undergraduate (B.Tech)",
      school: "Uttaranchal Institute of Technology",
      period: "2024 - 2028",
      icon: <GraduationCap size={20} />
    },
    {
      title: "Intermediate",
      school: "Sri Chaitanya Junior College",
      period: "2022 - 2024",
      icon: <Building2 size={20} />
    },
    {
      title: "Schooling",
      school: "St. John's English Medium School",
      period: "2022",
      icon: <Building2 size={20} />
    }
  ]

  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 relative">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-16 text-center"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Education</span>
        </motion.h2>

        <div className="space-y-8">
          {eduData.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex items-center gap-6 hover:border-cyan-500/30 transition-all"
            >
              <div className="bg-slate-950 p-4 rounded-xl text-cyan-400">{item.icon}</div>
              <div>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-slate-400">{item.school}</p>
                <span className="text-[#38bdf8] font-mono text-sm">{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}