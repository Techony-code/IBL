// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 text-center">
        
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Entrepreneurs.
          <br className="hidden sm:block" />
          Driving Sustainable Growth.
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-emerald-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Yewa Business Lab (YBL) is an enterprise support organisation fostering innovation, sustainability, and economic development in Yewaland and beyond.
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* Primary Button */}
          <button 
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-white text-emerald-700 font-semibold hover:scale-105 hover:shadow-lg transition"
            href="#contact"
          >
            Apply to Our Program
          </button>

          {/* Secondary Button */}
          <button 
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border border-white/70 text-white/90 font-semibold hover:bg-white hover:text-emerald-700 transition"
            href="#contact"
          >
            Partner With Us
          </button>
        </motion.div>

      </div>
    </section>
  );
}