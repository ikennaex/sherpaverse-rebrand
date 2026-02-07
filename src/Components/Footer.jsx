import React from "react";
import { logo } from "../import";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <img className="h-10 w-auto" src={logo} alt="Sherpaverse" />
              <h3 className="text-white uppercase tracking-[0.3em] font-bold text-xs">
                Sherpaverse LTD
              </h3>
            </div>
            <p className="text-gray-400 font-light text-lg leading-relaxed max-w-sm">
              Building tourism systems that work for communities, destinations, and people across Africa.
            </p>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-teal-500 mb-8">
              Reach Us
            </h4>
            <div className="space-y-6 text-white font-light">
              <p className="text-sm text-gray-400">
                Plot 15, Orchid Rd. Off Chevron Toll Gate, Lekki, Lagos.
              </p>
              <a href="tel:09057559292" className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                <FaWhatsapp className="text-teal-500" />
                <span className="text-sm">09057559292</span>
              </a>
              <a href="mailto:info@thesherpaverse.com" className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                <MdOutlineMail className="text-teal-500" />
                <span className="text-sm">info@thesherpaverse.com</span>
              </a>
            </div>
          </div>

          {/* Socials & Map Link */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-teal-500 mb-8">
              Connect
            </h4>
            <div className="flex gap-6 mb-12">
              <a 
                target="_blank" 
                rel="noreferrer"
                href="https://web.facebook.com/profile.php?id=61555161683538"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                target="_blank" 
                rel="noreferrer"
                href="https://www.instagram.com/sherpaverseltd/"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
              >
                <FaInstagram size={18} />
              </a>
            </div>
            
            {/* Minimalist Map Integration */}
            <div className="w-full h-32 grayscale rounded-sm overflow-hidden opacity-50 hover:opacity-100 transition-opacity">
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.5!3d6.4!" 
                loading="lazy"
                title="Office Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
            © {year} Sherpaverse. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;