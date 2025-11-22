import { motion } from 'framer-motion'

const sources = [
  {
    name: 'Crunchbase',
    items: ['Funding rounds', 'Acquisitions', 'Investor signals'],
  },
  {
    name: 'Indeed',
    items: ['Hiring velocity', 'Open roles', 'Team expansion'],
  },
  {
    name: 'Google News',
    items: ['Press', 'Launches', 'Partnerships', 'Momentum'],
  },
  {
    name: 'BuiltWith',
    items: ['Tech stack changes', 'Migrations', 'Purchase intent'],
  },
  {
    name: 'Clearbit',
    items: ['Verified contacts', 'Role identification', 'Who to message'],
  },
]

function CiiDial() {
  return (
    <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 border border-slate-200 flex items-center justify-center shadow-inner">
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: 'conic-gradient(from 180deg, rgba(124,58,237,0.6), rgba(99,102,241,0.6), rgba(16,185,129,0.6))' }}
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
      />
      <div className="absolute inset-[6px] rounded-full bg-white border border-slate-200" />
      <div className="relative text-2xl font-semibold text-violet-700">CII</div>
    </div>
  )
}

function DataStack() {
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
          Your outbound is only as strong as your signals.
        </motion.h2>
        <p className="text-center text-slate-600 mt-3">Intua fuses five high-value data sources into one unified Context Intelligence Engine.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6">
          {sources.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(2,6,23,0.06)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-200 to-violet-200" />
                <div className="font-medium text-slate-900">{s.name}</div>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                {s.items.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="text-slate-700 text-center max-w-2xl">
            Intua merges all 5 into a single Opportunity Score (CII) that tells you who to prioritize — and why.
          </div>
          <CiiDial />
        </div>
      </div>
    </section>
  )
}

export default DataStack
