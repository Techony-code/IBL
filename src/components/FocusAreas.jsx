// src/components/FocusAreas.jsx
import { motion } from "framer-motion";

const focusAreas = [
  {
    title: "Enterprise Development",
    description:
      "Supporting startups and SMEs with the tools, mentorship, and resources needed to scale sustainably."
  },
  {
    title: "Green Revolution & Sustainability",
    description:
      "Promoting environmentally responsible business practices and climate-conscious innovation."
  },
  {
    title: "Tech Training & Collaboration",
    description:
      "Equipping entrepreneurs with modern digital skills while fostering collaboration and innovation."
  },
  {
    title: "Professional Capacity Building",
    description:
      "Delivering high-impact training programs for professionals, executives, and business leaders."
  }
];

export default function FocusAreas() {
  return (
    <section
      id="focus"
      className="py-24 bg-slate-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Focus Areas
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-400">
                {area.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}