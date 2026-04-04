// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          
          {/* Brand */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
              Iyewa Business Lab
            </h4>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm">
              Empowering entrepreneurs and driving sustainable economic
              development across Iyewaland and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Explore
            </h5>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                { name: "About Us", link: "#about" },
                { name: "Focus Areas", link: "#focus" },
                { name: "Services", link: "#services" },
                { name: "Contact", link: "#contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-white transition duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Contact
            </h5>
            <div className="space-y-2 text-sm sm:text-base">
              <p className="text-gray-400">Iyewaland, Nigeria</p>
              <p className="text-gray-400">info@iyewabusinesslab.org</p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          
          <p>
            © {new Date().getFullYear()} Iyewa Business Lab. All rights reserved.
          </p>

          {/* Optional Social Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>

        </div>
      </div>
    </footer>
  );
}