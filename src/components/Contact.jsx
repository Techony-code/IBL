// src/components/Contact.jsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-800 dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h3>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-16 text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Have questions, want to partner with us, or ready to join Iyewa
          Business Lab? We’d love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
              <h4 className="font-semibold text-lg text-slate-800 dark:text-white">
                Email
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                info@iyewabusinesslab.org
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
              <h4 className="font-semibold text-lg text-slate-800 dark:text-white">
                Phone
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                +234 XXX XXX XXXX
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
              <h4 className="font-semibold text-lg text-slate-800 dark:text-white">
                Location
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Iyewaland, Nigeria
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 space-y-6"
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
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us how we can help"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}