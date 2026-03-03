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
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-teal-500 mb-8">
              Reach Us
            </h4>
            <div className="space-y-6 text-white font-light">
              <div className="">
                <p className="text-[10px] text-gray-500 uppercase mb-1 font-bold">
                  Office
                </p>
                <p className="text-sm text-gray-400 leading-relaxed font-light mb-2">
                  The Philippi Center, Oluwalogbon House, Plot SA, Obafemi
                  Awolowo Way, Alausa, Ikeja, Lagos
                </p>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  KM 33, Treasure Mall, Opposite Eko Akete 2nd Gate, Lekki-Epe
                  Expressway, Lagosa
                </p>
              </div>
              <a
                href="tel:09057559292"
                className="flex items-center gap-3 hover:text-teal-400 transition-colors"
              >
                <FaWhatsapp className="text-teal-500" />
                <span className="text-sm">
                  +234 (0) 905 755 9292, +234 (0) 903 118 9362
                </span>
              </a>
              <a
                href="mailto:info@thesherpaverse.com"
                className="flex items-center gap-3 hover:text-teal-400 transition-colors"
              >
                <div>
                <MdOutlineMail className="text-teal-500" />

                </div>
                <span className="text-sm">
                  info@sherpaverse.com, sherpaverse.ltd@gmail.com
                </span>
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
          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-teal-500 mb-8">
              Location
            </h4>
            <div className="w-full h-48 rounded-sm overflow-hidden transition-all duration-700">
              <iframe
                title="Sherpaverse Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31706.162931688945!2d3.3185409108398454!3d6.613292099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b934641e6428f%3A0x2131b57bcd1266a0!2sEridanSpace%20Ikeja%20Lagos!5e0!3m2!1sen!2sng!4v1769167253846!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
            © {year} Sherpaverse. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
