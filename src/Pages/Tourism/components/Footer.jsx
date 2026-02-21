import React from "react";
import {
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand & About */}
          <div className="lg:col-span-4">
            <div>
              <img src="/images/logo.png" className="h-16" alt="" />
              <h2 className="text-xl font-bold mb-6">SHERPAVERSE LTD</h2>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm mb-8">
              Building community-driven tourism systems that works for
              communities, destinations, and people.
            </p>

            {/* Social Media Icons from Lucide */}
            <div className="flex gap-5 text-gray-400">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://x.com/TourismSherpa"
                target="_blank"
                className="hover:text-teal-400 transition-colors"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-teal-500 mb-8">
              Contact
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail
                  size={16}
                  className="text-gray-500 mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase mb-1 font-bold">
                    Email
                  </p>
                  <a
                    href="mailto:hello@sherpaverse.com"
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    info@sherpaverse.com, sherpaverse.ltd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  size={16}
                  className="text-gray-500 mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase mb-1 font-bold">
                    Phone
                  </p>
                  <p className="text-sm text-gray-300">
                    +234 (0) 905 755 9292, +234 (0) 903 118 9362
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin
                  size={16}
                  className="text-gray-500 mt-1"
                  strokeWidth={1.5}
                />
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
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
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

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 tracking-widest uppercase">
            © {currentYear} Sherpaverse Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="/privacy"
              className="text-[10px] text-gray-600 uppercase hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-[10px] text-gray-600 uppercase hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
