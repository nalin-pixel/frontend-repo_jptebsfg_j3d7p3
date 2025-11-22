import { motion } from 'framer-motion'

function Problem() {
  const items = [
    {
      title: 'Too much manual research.',
      desc: 'SDRs lose 10–19 hours/week on scattered tabs.'
    },
    {
      title: 'No real timing triggers.',
      desc: 'Outreach is generic and gets lost in the noise.'
    },
    {
      title: 'Tools everywhere. No signal unity.',
      desc: 'Funding, hiring, news, tech stack — spread across 6+ tools.'
    }
  ]

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
          Outbound breaks because there’s no context.
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(2,6,23,0.06)] p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-200 to-indigo-200 mb-4" />
              <div className="text-slate-900 font-medium mb-2">{it.title}</div>
              <div className="text-slate-600 text-sm">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
