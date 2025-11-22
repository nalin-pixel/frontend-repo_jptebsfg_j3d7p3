import { motion } from 'framer-motion'

function ROI() {
  const stats = [
    { label: 'less research time', value: '75%' },
    { label: 'reply lift', value: '+25–40%' },
    { label: 'faster pipeline velocity', value: '+20–30%' },
    { label: 'yearly savings per SDR', value: '€10–18K' },
  ]
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_10px_35px_rgba(2,6,23,0.06)]"
            >
              <div className="text-3xl font-semibold text-slate-900">{s.value}</div>
              <div className="text-slate-600 text-sm mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mini dashboard visual */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(2,6,23,0.06)]">
          <div className="text-sm text-slate-500 mb-3">Smart Feed overview</div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="h-32 rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-slate-200" />
            <div className="h-32 rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-slate-200" />
            <div className="h-32 rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-slate-200" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ROI
