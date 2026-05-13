'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              🧱 Tiles Gallery
            </h3>
            <p className="text-gray-300">
              Discover premium tiles and ceramics that transform your space into a masterpiece.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-tiles" className="hover:text-indigo-400 transition">
                  All Tiles
                </Link>
              </li>
              <li>
                <Link href="/my-profile" className="hover:text-indigo-400 transition">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost text-lg hover:text-indigo-400"
              >
                f
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost text-lg hover:text-indigo-400"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost text-lg hover:text-indigo-400"
              >
                📷
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost text-lg hover:text-indigo-400"
              >
                ▶
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="font-bold mb-4">Contact Us</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
            <div>
              <p className="font-semibold">📧 Email</p>
              <a href="mailto:support@tilesgallery.com" className="hover:text-indigo-400">
                support@tilesgallery.com
              </a>
            </div>
            <div>
              <p className="font-semibold">📞 Phone</p>
              <a href="tel:+1234567890" className="hover:text-indigo-400">
                +1 (234) 567-890
              </a>
            </div>
            <div>
              <p className="font-semibold">📍 Location</p>
              <p>123 Tile Street, Design City, DC 12345</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 Tiles Gallery. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-indigo-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-indigo-400">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
