import { motion } from 'framer-motion'

const features = [
  'Smart Signal Feed',
  'Opportunity Score (CII)',
  'Context-rich Company View',
  'Verified Contacts (Clearbit)',
  'AI Sequence Generator',
  'Multi-step sequences',
  'CSV export + Instantly/Smartlead integrations',
  'Weekly ROI summaries & Smart Prospect Updates',
]

function FeatureGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(2,6,23,0.06)] hover:shadow-[0_20px_60px_rgba(2,6,23,0.10)] transition-shadow"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-200 to-violet-200 mb-4" />
              <div className="text-slate-900 font-medium text-sm">{f}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
