import React from 'react'
import Image from "./../assets/images/footer.png";

// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-8">
        {/* <FaInstagram className="hover:text-gray-400 cursor-pointer" />
        <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
        <FaTwitter className="hover:text-gray-400 cursor-pointer" />
        <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
        <FaYoutube className="hover:text-gray-400 cursor-pointer" /> */}
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-700 pt-8">
        {/* Useful Link */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Link</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Solution</li>
            <li>Industries</li>
            <li>Products</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Service</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Sale</li>
            <li>Marketing</li>
            <li>Real Estate</li>
            <li>Automotive</li>
            <li>Education</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="text-sm text-gray-400 space-y-4">
            <div className="border border-gray-600 rounded-lg p-3">
              1700 W Blancke St, Kiyev<br />
              Port South USA, American
            </div>
            <div className="border border-gray-600 rounded-lg p-3">
              +3255 456 789<br />
              Mail@Primarily.Com
            </div>
          </div>
        </div>

        {/* Our Latest News */}
        <div className='footerImageBlock'>
          <h3 className="text-lg font-semibold mb-4">Our Latest News</h3>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={Image}
              alt="Latest News" 
              className="object-cover w-full h-32"
            />
            <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
                <button className="footerButton">
                Read Now
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
}
