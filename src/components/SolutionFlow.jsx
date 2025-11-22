import { motion } from 'framer-motion'

function Block({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(2,6,23,0.06)]"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-slate-900 font-medium">{title}</div>
          <div className="text-slate-500 text-sm">{subtitle}</div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-200 to-violet-200" />
      </div>
      <div className="mt-4 h-40 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200" />
    </motion.div>
  )
}

function SolutionFlow() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-slate-900 text-center"
        >
          The Intua Flow
        </motion.h2>
        <p className="text-center text-slate-600 mt-3">Smart Setup → Smart Feed → Company View → AI Generator</p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Block title="Smart Setup" subtitle="60 seconds" />
          <Block title="Smart Signal Feed" subtitle="ranked by Opportunity Score" />
          <Block title="Company View" subtitle="Why they’re hot now" />
          <Block title="AI Email Generator" subtitle="context-driven sequences" />
        </div>
      </div>
    </section>
  )
}

export default SolutionFlow
