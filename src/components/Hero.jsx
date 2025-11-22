import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -40])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.8])

  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/80" />

      {/* Aura gradient accents */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900"
            >
              Outbound powered by real context.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
              className="mt-6 text-lg md:text-xl text-slate-600"
            >
              Discover the right companies, identify the right moment, and send the right message — in under 90 seconds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-6 py-3 text-base font-medium shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.45)] transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Join the Beta (Limited Seats)</span>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl bg-white/70 backdrop-blur text-slate-900 px-6 py-3 text-base font-medium border border-slate-200 hover:bg-white transition-colors shadow-sm"
              >
                See Live Demo
              </a>
            </motion.div>

            {/* Scarcity indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="mt-5 inline-flex items-center gap-2 text-sm text-amber-600"
            >
              <span className="text-lg">⚠️</span> Only 300 Beta seats available — <span className="font-semibold">128 remaining</span>.
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative h-[520px] md:h-[620px]">
            {/* Spline aura animation */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(2,6,23,0.12)] bg-white/60 backdrop-blur-xl border border-white/60">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </motion.div>

            {/* Glass panels representing Smart Feed → Company View → AI Generator */}
            <div className="absolute -bottom-8 -left-6 right-6 flex gap-4">
              {[
                { title: 'Smart Signal Feed', score: 86 },
                { title: 'Company View', score: 92 },
                { title: 'AI Generator', score: 88 },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
                  className="flex-1 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-4 shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-slate-700">{card.title}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <div className="text-xs text-slate-500">live</div>
                    </div>
                  </div>
                  <div className="mt-3 h-28 rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-slate-200/70 flex items-center justify-center relative overflow-hidden">
                    {/* CII score animation */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.05 }}
                      className="text-3xl font-semibold text-violet-700"
                    >
                      {card.score}
                    </motion.div>
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.05, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,0.15), transparent 70%)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
