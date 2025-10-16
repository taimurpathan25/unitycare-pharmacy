import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white text-center py-6 mt-12 bg-gradient-to-b from-green-900/90 to-teal-800/80">
      <div className="p-4 px-10 grid sm:grid-cols-2 md:grid-cols-4">
        <div className="">
          <div className="image">
          <img src="./logo3.png" alt="Logo Image" width={100} className="mx-auto" />
        </div>
        <div className="newsletter">
          <div className="input">
            <h1 className="text-left text-3xl font-semibold mt-3">Newsletter Here </h1>
            <input type="search" name="" id="" placeholder="Newsletter" className=" w-full mt-2 bg-white p-2 rounded" />
            <button type="search" className="mt-0.5 bg-amber-500 py-3 px-8 rounded ">Subscribe Here</button>
          </div>
        </div>
        </div>
        <div>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
          </ul>
        </div>
      </div>

      <p>&copy; {new Date().getFullYear()} UnityCare Pharmacy. All Rights Reserved.</p>
      <span className="text-xs sm:text-base md:text-lg"> <a href="tel:+917618270346">Call: +91 7618270346 </a></span> || 
      <span className="text-xs sm:text-base md:text-lg"> <a href="mailto:taimurpathan25@gmail.com">Email: taimurpathan25@gmail.com </a></span>
    </footer>
  );
};

export default Footer;
