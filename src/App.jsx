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
      {/* Added 'min-h-screen' to the main container to ensure it covers the device height */}
      <main className="w-full min-h-screen bg-[#0a0a0a] text-white">
        
        <Navigation />

        {/* REMOVED: 'h-full' and 'overflow-y-auto' 
            CHANGED: 'min-h-screen' and standard padding 
            This allows the page to naturally scroll on mobile devices.
        */}
        <div className="w-full min-h-screen pt-28 pb-10 px-4 md:px-0">
          
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