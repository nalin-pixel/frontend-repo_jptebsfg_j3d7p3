import { motion } from 'framer-motion'

const plans = [
  { name: 'Free', price: '€0/mo', bullets: ['1 seat', '25 credits', 'Smart Feed access'] },
  { name: 'Solo Founder', price: '€249/mo', bullets: ['1 seat', '1,000 credits', 'Full sequences'] },
  { name: 'Startup', price: '€749/mo', bullets: ['4 seats', '1,250 credits/seat'] },
  { name: 'Agency Growth', price: '€999/mo', bullets: ['6 seats', '1,250 credits/seat'] },
  { name: 'Mid-Market', price: '€3,749/mo', bullets: ['12 seats', '2,000 credits/seat'] },
  { name: 'Enterprise / API', price: 'Custom', bullets: ['Unlimited seats', '2,000–5,000 credits/seat', 'Context API + CII Dashboard'] },
]

function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold text-slate-900 text-center"
          >
            Pricing
          </motion.h2>
          <div className="mt-3 text-sm text-amber-600">⚠️ Only 300 Beta seats available — <span className="font-semibold">128 remaining</span>.</div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(2,6,23,0.06)] flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="text-slate-900 font-medium">{p.name}</div>
                <div className="text-slate-700">{p.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-4 py-2 text-sm font-medium shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.45)] transition-all">Choose plan</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
