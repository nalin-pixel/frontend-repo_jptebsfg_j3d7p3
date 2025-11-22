import { motion } from 'framer-motion'

function FooterCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600" />
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-white text-center"
        >
          Outbound that finally knows what’s happening.
        </motion.h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 text-base font-medium shadow-[0_8px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.35)] transition-all relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Join the Beta (Limited Access)</span>
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-xl border border-white/60 bg-white/10 backdrop-blur text-white px-6 py-3 text-base font-medium hover:bg-white/20 transition-colors"
          >
            See it in Action
          </a>
        </div>
      </div>
    </section>
  )
}

export default FooterCTA
