import { motion } from 'framer-motion'

const logos = [
  'Crunchbase',
  'BuiltWith',
  'Indeed',
  'Google News',
  'Clearbit',
  'Instantly',
  'Smartlead',
  'Expandi',
  'Product Hunt',
]

function LogoMarquee() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-slate-600 text-sm font-medium mb-6">Powered by live market intelligence.</h3>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex gap-10 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          >
            {[...logos, ...logos].map((name, idx) => (
              <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-100 to-violet-100 border border-slate-200" />
                <span className="text-slate-700 text-sm font-medium">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LogoMarquee
