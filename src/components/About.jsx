// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 md:py-28 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            About Yewa Business Lab
          </h3>

          <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.p
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Yewa Business Lab (YBL) is an enterprise support organisation committed
          to accelerating startups, SMEs, and professionals through innovation,
          capacity building, and sustainability-focused initiatives. Our work
          aligns with the United Nations Sustainable Development Goals (SDGs),
          fostering inclusive economic growth and long-term impact in Yewaland
          and beyond.
        </motion.p>

      </div>
    </section>
  );
}