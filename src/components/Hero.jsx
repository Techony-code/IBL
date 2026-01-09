// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Entrepreneurs.<br />Driving Sustainable Growth.
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-emerald-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Iyewa Business Lab (IBL) is an enterprise support organisation fostering innovation, sustainability, and economic development in Iyewaland and beyond.
        </motion.p>
        <motion.div
          className="mt-10 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button className="px-8 py-3 rounded-full bg-white text-emerald-700 font-semibold hover:scale-105 transition">
            Apply to Our Program
          </button>
          <button className="px-8 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-emerald-700 transition">
            Partner With Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}