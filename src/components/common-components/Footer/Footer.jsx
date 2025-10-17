import React from "react";
import './Footer.css'
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white text-center py-6 mt-12 bg-gradient-to-b from-green-900/90 to-teal-800/80">
      <div className="p-4 px-10 grid sm:grid-cols-2 md:grid-cols-5">
        <div className="mb-10">
          <div className="image">
          <img src="./logo3.png" alt="Logo Image" width={100} />
        </div>
        <div className="call-btn">
          <div className="phone-footer flex gap-4 mt-8">
            <Phone/>
            <span className="tracking-widest">+91 7618270346</span>
          </div>
          <div className="mail-footer flex gap-4 mt-6">
            <Mail/>
            <span className="">taimurpathan25@gmail.com</span>
          </div>

          <div className='flex gap-10 mt-6 bg-white p-2 w-[80%] rounded-2xl inset-shadow'>
             <a href="#" target="_blank"> <FaFacebook className='text-xl text-blue-600 rounded mx-auto'/></a>
              <a href="#" target="_blank"><FaInstagram  className='text-xl bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] rounded mx-auto'/></a>
              <a href="#" target="_blank"><FaYoutube className='text-xl text-red-500 rounded mx-auto'/></a>
              <a href="https://www.linkedin.com/in/mohd-taimur-khan-a29aab258/" target="_blank"><FaLinkedin className='text-xl text-blue-900 rounded mx-auto'/></a>
              </div>
        </div>
        </div>
        <div className="footer-links mb-10">
            <h1 className="text-2xl font-semibold mb-10">Company</h1>
          <ul>
            <li>About</li>
            <li>Plans</li>
            <li>Products</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="footer-links mb-10">
          <h1 className="text-2xl font-semibold mb-10">Help & Support</h1>
          <ul>
            <li>Support</li>
            <li>Locate Us</li>
            <li>Contact Us</li>
            <li>Login</li>
            <li>Faq</li>
          </ul>
        </div>
        <div className="footer-links mb-10">
          <h1 className="text-2xl font-semibold mb-10">Service in Cities</h1>
          <ul>
            <li>Bisalpur</li>
            <li>Pilibhit</li>
            <li>Bareilly</li>
            <li>Shahjahanpur</li>
          </ul>
        </div>
        <div className="newsletter">
          <div className="input">
            <h1 className="text-left text-2xl font-semibold">Newsletter Here </h1>
            <p className="text-left mt-5 mb-5">Subscribe our Newsletter to get the latest news and insights</p>
            <input type="search" placeholder="Email for Subscribe our Newsletter" name="" id="" className=" w-full mt-2 bg-white p-2 rounded" style={{color:'grey'}} />
            <button type="search" className="mt-0.5 bg-amber-500 py-2 px-6 rounded">Subscribe</button>

            <div className="open-close-time text-left mt-5">
              <h1>Day : Monday - Saturday</h1>
              <span>Time : 9:30 AM - 10 PM</span>
            </div>
          </div>
        </div>
      </div>


<div className="bottom-footer border-t-2 mb-">
      <p className="mt-10">&copy; {new Date().getFullYear()} UnityCare Pharmacy. All Rights Reserved.</p>
      <span className="text-xs sm:text-base md:text-lg"> <a href="tel:+917618270346">Call: +91 7618270346 </a></span> || 
      <span className="text-xs sm:text-base md:text-lg"> <a href="mailto:taimurpathan25@gmail.com">Email: taimurpathan25@gmail.com </a></span>
    </div>
    </footer>
  );
};

export default Footer;
