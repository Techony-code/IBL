// src/components/Contact.jsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
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
            Get in Touch
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg">
            Have questions, want to partner with us, or ready to join Iyewa
            Business Lab? We’d love to hear from you.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          
          {/* Contact Info */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Email",
                value: "info@iyewabusinesslab.org",
              },
              {
                title: "Phone",
                value: "+234 XXX XXX XXXX",
              },
              {
                title: "Location",
                value: "Iyewaland, Nigeria",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-base sm:text-lg text-slate-800 dark:text-white">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 space-y-5 sm:space-y-6 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us how we can help"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm sm:text-base"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 sm:py-4 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 hover:shadow-lg transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}