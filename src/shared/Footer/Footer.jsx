import React from "react";
import footerLogo from '../../assets/Images/logo-xl.png'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#244D3F] text-white w-full">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col items-center text-center space-y-6">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <img src={footerLogo} alt="footer Logo" />
          </h1>

          {/* Description */}
          <p className="max-w-md sm:max-w-xl text-xs sm:text-sm text-white/80 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* Social Links */}
          <div className="flex flex-col  items-center space-y-3">
            <p className="text-xs sm:text-sm font-medium">Social Links</p>

            <div className="flex space-x-3 sm:space-x-4 flex-col sm:flex-row">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center"></div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/20"></div>

          {/* Bottom Section */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 text-xs sm:text-sm text-white/70">
            <p className="text-center md:text-left">
              © 2026 KeenKeeper. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
              <p className="cursor-pointer hover:text-white">Privacy Policy</p>
              <p className="cursor-pointer hover:text-white">
                Terms of Service
              </p>
              <p className="cursor-pointer hover:text-white">Cookies</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
