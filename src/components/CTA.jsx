// src/components/CTA.jsx
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Build, Grow, and Scale?
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl mb-10 text-emerald-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join Iyewa Business Lab and gain access to mentorship, funding
          opportunities, and a thriving community of innovators.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition"
          >
            Apply to Our Program
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl border border-white/70 font-semibold hover:bg-white/10 transition"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}