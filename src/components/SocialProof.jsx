import { motion } from 'framer-motion'

const testimonials = [
  {
    type: 'Founder-led outbound',
    quote: 'We cut research time from hours to minutes and finally send emails that reference what actually happened.',
  },
  {
    type: 'SDR teams',
    quote: 'Reply rates jumped 32% after switching to Intua. Signals give us the perfect timing.',
  },
  {
    type: 'Agencies',
    quote: 'Clients love the context. We deliver personalization at scale without the chaos.',
  },
]

function SocialProof() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(2,6,23,0.06)]">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="min-w-[280px] max-w-xs rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-xs text-slate-500 mb-2">{t.type}</div>
                <div className="text-slate-900 text-sm">“{t.quote}”</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
