import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer({ onShowTerms }: { onShowTerms: () => void }) {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-2 mr-4">
                <Image
                  src="/sp.jpg"
                  alt="Star Pops Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">Star Pops</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Ghana's premier popcorn and ice cream business revolutionizing the
              snack industry. From university campus to national expansion,
              we're building brands that empower young entrepreneurs and
              showcase Ghana's potential.
            </p>
            <div className="flex space-x-4">
              <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                "Feel the Pops"
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#business"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Business Metrics
                </a>
              </li>
              <li>
                <a
                  href="#investment"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Investment
                </a>
              </li>
              <li>
                <a
                  href="/plan"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Investment Plan
                </a>
              </li>
              <li>
                <button
                  onClick={onShowTerms}
                  className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer text-left"
                >
                  Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">
                  starenterprise001@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+233 533 652 730</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Ghana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">KNUST Campus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Star Pops (Star Enterprise). All rights reserved.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              <span className="mr-4">Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>

        {/* Investment Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-300 text-sm text-center">
            <strong>Investment Disclaimer:</strong> This website is for
            informational purposes only. Investment opportunities are subject to
            final agreement and legal review. Past performance does not
            guarantee future results. Consult with legal and financial advisors
            before making any investment decision.
          </p>
        </div>
      </div>
    </footer>
  );
}
