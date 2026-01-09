// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">
              Iyewa Business Lab
            </h4>
            <p className="text-gray-400">
              Empowering entrepreneurs and driving sustainable economic
              development across Iyewaland and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-semibold text-white mb-4">Explore</h5>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#focus" className="hover:text-white transition">
                  Focus Areas
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-white mb-4">Contact</h5>
            <p className="text-gray-400">Iyewaland, Nigeria</p>
            <p className="text-gray-400">info@iyewabusinesslab.org</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Iyewa Business Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}