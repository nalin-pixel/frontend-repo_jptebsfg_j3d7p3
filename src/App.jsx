import { motion } from 'framer-motion'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import Problem from './components/Problem'
import SolutionFlow from './components/SolutionFlow'
import DataStack from './components/DataStack'
import ROI from './components/ROI'
import FeatureGrid from './components/FeatureGrid'
import Pricing from './components/Pricing'
import SocialProof from './components/SocialProof'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 shadow-md" />
            <span className="font-semibold">Intua</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Product</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#demo" className="hover:text-slate-900">Demo</a>
          </div>
          <a href="#pricing" className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition-colors">Join Beta</a>
        </div>
      </header>

      <main>
        <Hero />
        <LogoMarquee />
        <Problem />
        <SolutionFlow />
        <DataStack />
        <ROI />
        <FeatureGrid />
        <Pricing />
        <SocialProof />
        <FooterCTA />
      </main>

      <footer className="py-10 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Intua</footer>
    </div>
  )
}

export default App
