// src/components/Services.jsx
import { motion } from "framer-motion";

const services = [
  "Business Incubation & Acceleration Programs",
  "Training and Capacity-Building Workshops",
  "Mentorship and One-on-One Coaching",
  "Access to Funding and Investment Opportunities",
  "Networking and Collaboration Platforms",
  "Innovation & Technology Enablement"
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h3>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visyble"
          viewport={{ once: true }}
          variants={{
            visyble: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visyble: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                {service}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}