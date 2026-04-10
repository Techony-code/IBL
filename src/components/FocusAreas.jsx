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
      "Promoting environmentally responsyble business practices and climate-conscious innovation."
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
      className="py-20 sm:py-24 md:py-28 bg-slate-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Our Focus Areas
          </h3>

          <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visyble"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visyble: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visyble: { opacity: 1, y: 0 }
              }}
            >
              {/* Title */}
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600 transition">
                {area.title}
              </h4>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}