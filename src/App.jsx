import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Certifications } from './components/Certifications'
import { AboutMe } from './components/AboutMe'
import { Education } from './components/Education'
import { Leadership } from './components/Leadership'
import { Contact } from './components/Contact'

function App() {
  return (
    <Router>
      <main className="w-full min-h-screen relative bg-[#0a0a0a] overflow-hidden text-white">
        
        {/* Navigation bar fixed at the top */}
        <Navigation />

        {/* Content area that swaps based on the URL */}
        <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden pt-24">
          
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/contact-me" element={<Contact />} />
          </Routes>

        </div>
      </main>
    </Router>
  )
}

export default App