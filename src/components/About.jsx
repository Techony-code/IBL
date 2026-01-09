// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Iyewa Business Lab
        </motion.h3>

        <motion.p
          className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Iyewa Business Lab (IBL) is an enterprise support organisation committed
          to accelerating startups, SMEs, and professionals through innovation,
          capacity building, and sustainability-focused initiatives. Our work
          aligns with the United Nations Sustainable Development Goals (SDGs),
          fostering inclusive economic growth and long-term impact in Iyewaland
          and beyond.
        </motion.p>
      </div>
    </section>
  );
}
