import React from 'react';
import { Instagram } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* SHOP Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">SHOP</h2>
          <ul className="space-y-4">
            <li><a href="#" className="hover:opacity-80">Variety Packs</a></li>
            <li><a href="#" className="hover:opacity-80">Our Flavors</a></li>
            <li><a href="#" className="hover:opacity-80">Subscribe & Save</a></li>
          </ul>
        </div>

        {/* SUPPORT Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">SUPPORT</h2>
          <ul className="space-y-4">
            <li><a href="#" className="hover:opacity-80">Find Us</a></li>
            <li><a href="#" className="hover:opacity-80">Shipping & Return Policy</a></li>
            <li><a href="#" className="hover:opacity-80">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-80">Terms of Service</a></li>
            <li><a href="#" className="hover:opacity-80">Accessibility Options</a></li>
            <li><a href="#" className="hover:opacity-80">Accessibility Statement</a></li>
          </ul>
        </div>

        {/* QUESTIONS Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">QUESTIONS</h2>
          <a href="mailto:hello@drinkwildwonder.com" className="hover:opacity-80">
            hello@drinkwildwonder.com
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 flex flex-col items-center justify-center text-center md:flex-row">
  {/* WHOLESALE Section */}
  <div className="mt-12 md:mt-0 md:absolute left-8">
    <h2 className="text-2xl font-bold mb-4">WHOLESALE</h2>
    <a href="mailto:sales@drinkwildwonder.com" className="hover:opacity-80">
      sales@drinkwildwonder.com
    </a>
  </div>

  {/* Logo Section */}
  <div className="flex flex-col items-center space-y-6">
    <h1 className="text-4xl font-serif italic">wildwonder®</h1>

    {/* Social Icons */}
    <div className="flex space-x-4">
      <a href="#" className="hover:opacity-80">
        <Instagram size={24} />
      </a>
      <a href="#" className="hover:opacity-80">
        < FaTiktok size={24} />
      </a>
   
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
