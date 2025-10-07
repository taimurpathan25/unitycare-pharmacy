// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-green-600 text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          UnityCare Pharmacy
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {/* HOME */}
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          {/* ABOUT */}
          <div className="relative group">
            <button className="hover:text-yellow-300 transition flex items-center gap-1">
              About ▾
            </button>
            <div className="absolute left-0 top-full mt-2 w-44 bg-white text-green-800 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link to="/about/company" className="block px-4 py-2 hover:bg-green-50">Company</Link>
              <Link to="/about/team" className="block px-4 py-2 hover:bg-green-50">Our Team</Link>
              <Link to="/about/careers" className="block px-4 py-2 hover:bg-green-50">Careers</Link>
            </div>
          </div>

          {/* SHOP */}
          <div className="relative group">
            <button className="hover:text-yellow-300 transition flex items-center gap-1">
              Shop ▾
            </button>
            <div className="absolute left-0 top-full mt-2 w-56 bg-white text-green-800 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link to="/shop/medicines" className="block px-4 py-2 hover:bg-green-50">Medicines</Link>
              <Link to="/shop/health-products" className="block px-4 py-2 hover:bg-green-50">Health Products</Link>

              {/* Nested Dropdown */}
              <div className="relative group">
                <button className="w-full text-left flex justify-between items-center px-4 py-2 hover:bg-green-50">
                  Categories ▸
                </button>
                <div className="absolute left-full top-0 ml-1 w-52 bg-white text-green-800 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/shop/categories/tablets" className="block px-4 py-2 hover:bg-green-50">Tablets</Link>
                  <Link to="/shop/categories/capsules" className="block px-4 py-2 hover:bg-green-50">Capsules</Link>
                  <Link to="/shop/categories/syrups" className="block px-4 py-2 hover:bg-green-50">Syrups</Link>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="relative group">
            <button className="hover:text-yellow-300 transition flex items-center gap-1">
              Services ▾
            </button>
            <div className="absolute left-0 top-full mt-2 w-48 bg-white text-green-800 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link to="/services/consultation" className="block px-4 py-2 hover:bg-green-50">Doctor Consultation</Link>
              <Link to="/services/lab-tests" className="block px-4 py-2 hover:bg-green-50">Lab Tests</Link>
              <Link to="/services/home-delivery" className="block px-4 py-2 hover:bg-green-50">Home Delivery</Link>
            </div>
          </div>

          {/* CONTACT */}
          <Link to="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </nav>

        {/* Cart & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button className="bg-white text-green-700 px-4 py-2 rounded-full shadow flex items-center gap-2 hover:bg-yellow-300 hover:text-white transition">
            <ShoppingCart size={18} /> Cart
          </button>

          {/* Mobile menu toggle */}
          <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenu && (
        <div className="md:hidden bg-white text-green-800 shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/" className="hover:text-green-600">Home</Link>

            {/* About */}
            <details>
              <summary className="cursor-pointer py-2">About</summary>
              <div className="pl-4 flex flex-col space-y-1">
                <Link to="/about/company">Company</Link>
                <Link to="/about/team">Our Team</Link>
                <Link to="/about/careers">Careers</Link>
              </div>
            </details>

            {/* Shop */}
            <details>
              <summary className="cursor-pointer py-2">Shop</summary>
              <div className="pl-4 flex flex-col space-y-1">
                <Link to="/shop/medicines">Medicines</Link>
                <Link to="/shop/health-products">Health Products</Link>
                <details>
                  <summary className="cursor-pointer py-2">Categories</summary>
                  <div className="pl-4 flex flex-col space-y-1">
                    <Link to="/shop/categories/tablets">Tablets</Link>
                    <Link to="/shop/categories/capsules">Capsules</Link>
                    <Link to="/shop/categories/syrups">Syrups</Link>
                  </div>
                </details>
              </div>
            </details>

            {/* Services */}
            <details>
              <summary className="cursor-pointer py-2">Services</summary>
              <div className="pl-4 flex flex-col space-y-1">
                <Link to="/services/consultation">Doctor Consultation</Link>
                <Link to="/services/lab-tests">Lab Tests</Link>
                <Link to="/services/home-delivery">Home Delivery</Link>
              </div>
            </details>

            <Link to="/contact" className="hover:text-green-600">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
