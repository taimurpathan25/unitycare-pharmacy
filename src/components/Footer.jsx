import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white text-center py-6 mt-12 bg-gradient-to-b from-green-900/90 to-teal-800/80">
      <p>&copy; {new Date().getFullYear()} UnityCare Pharmacy. All Rights Reserved.</p>
      <span className="text-xs sm:text-base md:text-lg"> <a href="tel:+917618270346">Call: +91 7618270346 </a></span> || 
      <span className="text-xs sm:text-base md:text-lg"> <a href="mailto:taimurpathan25@gmail.com">Email: taimurpathan25@gmail.com </a></span>
    </footer>
  );
};

export default Footer;
