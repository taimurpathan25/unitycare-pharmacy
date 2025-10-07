// /**
//  * The function `Navbar` creates a responsive multi-level navigation bar component
//  * in React with dropdown menus for desktop and a drawer for mobile devices.
//  */
// // import React, { useRef, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { href, Link } from "react-router-dom";
// // import useLockBodyScroll from "./UseLockBodyScroll";
// // import { MenuIcon, CloseIcon } from "./Icons";
// // import { DesktopDropdown } from "./DesktopDropdown";
// // import { MobileItem } from "./MobileNavbar";
// // import { MENU } from "./MenuData";


// // ====== MENU DATA ======
// // const MENU = [
// //   {
// //     label: "Medicines",
// //     to: "/all-medicines",
// //   },
// //   {
// //     label: "Products",
// //     to: "/all-products",
// //     children: [
// //       {
// //         label: "Personal Care",
// //         to: "/products/personal-care",
// //         children: [
// //           { label: "Skin Care", to: "/products/personal-care/skin-care",
// //             children: [
// //               { label: "Moisturizers", to: "/products/personal-care/skin-care/moisturizers" },
// //               { label: "Sunscreens", to: "/products/personal-care/skin-care/sunscreens" },
// //               { label: "Cleansers", to: "/products/personal-care/skin-care/cleansers" },
// //             ]
// //            },
// //           { label: "Hair Care", to: "/products/personal-care/hair-care" },
// //           { label: "Baby and Mom Care", to: "/products/personal-care/baby-and-mom-care" },
// //           { label: "Sexual Wellness", to: "/products/personal-care/sexual-wellness" },
// //           { label: "Oral Care", to: "/products/personal-care/oral-care" },
// //           { label: "Elderly Care", to: "/products/personal-care/elderly-care" },
// //         ],
// //       },
// //       {
// //         label: "Commerce",
// //         to: "/products/commerce",
// //         children: [
// //           { label: "Catalog", to: "/products/commerce/catalog" },
// //           { label: "Checkout", to: "/products/commerce/checkout" },
// //           { label: "Payments", to: "/products/commerce/payments",
// //             children: [
// //               { label: "Cards", to: "/products/commerce/payments/cards",
// //                 children: [
// //                   { label: "Visa", to: "/products/commerce/payments/cards/visa",
// //                     children: [
// //                       { label: "Visa Checkout", to: "/products/commerce/payments/cards/visa/checkout",
// //                         children: [
// //                           { label: "Visa Checkout API", to: "/products/commerce/payments/cards/visa/checkout/api" },
// //                           { label: "Visa Checkout SDK", to: "/products/commerce/payments/cards/visa/checkout/sdk" },
// //                         ]
// //                        },
// //                       { label: "Visa Direct", to: "/products/commerce/payments/cards/visa/direct" },
// //                     ]
// //                    },
// //                   { label: "MasterCard", to: "/products/commerce/payments/cards/mastercard" },
// //                 ]
// //                },
// //               { label: "UPI", to: "/products/commerce/payments/upi" },
// //               { label: "Net Banking", to: "/products/commerce/payments/netbanking" },
// //             ],
// //           },
// //         ],
// //       },
// //       { label: "Marketing", to: "/products/marketing" },
// //     ],
// //   },
// //   {
// //     label: "Solutions",
// //     to: "/solutions",
// //     children: [
// //       { label: "SaaS", to: "/solutions/saas" },
// //       {
// //         label: "E-commerce",
// //         to: "/solutions/ecommerce",
// //         children: [
// //           {
// //             label: "Online Store",
// //             to: "/solutions/ecommerce/online-store",
// //             children: [
// //               { label: "Product Management", to: "/solutions/ecommerce/online-store/product-management",
// //                 children: [
// //                   { label: "Product Catalog", to: "/solutions/ecommerce/online-store/product-management/catalog",
// //                     children: [
// //                       { label: "Categories", to: "/solutions/ecommerce/online-store/product-management/catalog/categories" },
// //                       { label: "Brands", to: "/solutions/ecommerce/online-store/product-management/catalog/brands" },
// //                     ]
// //                    },
// //                   { label: "Product Variants", to: "/solutions/ecommerce/online-store/product-management/variants" },
// //                 ]
// //                },
// //               { label: "Order Management", to: "/solutions/ecommerce/online-store/order-management" },
// //             ],
// //           },
// //           { label: "Payment Gateway", to: "/solutions/ecommerce/payment-gateway" },
// //           { label: "Inventory Management", to: "/solutions/ecommerce/inventory-management" },
// //         ],
// //       },
// //       {
// //         label: "EdTech",
// //         to: "/solutions/edtech",
// //         children: [
// //           { label: "Learning Management", to: "/solutions/edtech/lms" },
// //           { label: "Online Courses", to: "/solutions/edtech/online-courses" },
// //           { label: "Student Portal", to: "/solutions/edtech/student-portal" },
// //         ],
// //       },
// //       {
// //         label: "Healthcare",
// //         to: "/solutions/healthcare",
// //         children: [
// //           { label: "Telemedicine", to: "/solutions/healthcare/telemedicine" },
// //           { label: "Patient Management", to: "/solutions/healthcare/patient-management" },
// //           { label: "Health Records", to: "/solutions/healthcare/health-records" },
// //         ],
// //       },
// //     ],
// //   },
// //   { label: "Pricing", to: "/pricing" },
// //   { label: "Docs", to: "/docs" },
// //   { label: "Pricing", to: "/pricing" },
// //   { label: "Docs", to: "/docs" },
// //   { label: "Pricing", to: "/pricing" },
// //   { label: "Docs", to: "/docs" },
// // ];


// // // ====== ICONS ======
// // const ChevronDown = (props) => (
// //   <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
// //     <path
// //       d="M6 9l6 6 6-6"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // );

// // const MenuIcon = (props) => (
// //   <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
// //     <path
// //       d="M3 6h18M3 12h18M3 18h18"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //     />
// //   </svg>
// // );

// // const CloseIcon = (props) => (
// //   <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
// //     <path
// //       d="M6 6l12 12M18 6L6 18"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //     />
// //   </svg>
// // );

// // ====== HOOKS ======
// // Lock body scroll when drawer open
// // function useLockBodyScroll(locked) {
// //   useEffect(() => {
// //     if (!locked) return;
// //     const original = document.body.style.overflow;
// //     document.body.style.overflow = "hidden";
// //     return () => {
// //       document.body.style.overflow = original;
// //     };
// //   }, [locked]);
// // }

// // Click outside utility (kept for dropdowns)
// // function useOnClickOutside(ref, handler) {
// //   useEffect(() => {
// //     function listener(e) {
// //       if (!ref.current || ref.current.contains(e.target)) return;
// //       handler(e);
// //     }
// //     document.addEventListener("mousedown", listener);
// //     document.addEventListener("touchstart", listener);
// //     return () => {
// //       document.removeEventListener("mousedown", listener);
// //       document.removeEventListener("touchstart", listener);
// //     };
// //   }, [ref, handler]);
// // }

// // ====== DESKTOP NAV ======
// // function DesktopDropdown({ item }) {
// //   const [open, setOpen] = useState(false);
// //   const ref = useRef(null);
// //   // useOnClickOutside(ref, () => setOpen(false));

// //   const hasChildren = Array.isArray(item.children) && item.children.length > 0;

// //   return (
// //     <div
// //       ref={ref}
// //       className="relative text-white"
// //       onMouseEnter={() => setOpen(true)}
// //       onMouseLeave={() => setOpen(false)}
// //     >
// //       <Link to={item.to || "#"}
// //         className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 focus:outline-none"
// //         aria-haspopup={hasChildren ? "menu" : undefined}
// //         aria-expanded={open}
// //         onClick={() => (hasChildren ? setOpen((v) => !v) : null)}
// //       >
// //         <span className="text-sm text-amber-50 font-medium">{item.label}</span>
// //         {hasChildren && (
// //           <ChevronDown
// //             className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
// //           />
// //         )}
// //       </Link>

// //       <AnimatePresence>
// //         {hasChildren && open && (
// //           <motion.div
// //             initial={{ opacity: 0, y: 8 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: 8 }}
// //             transition={{ duration: 0.18 }}
// //             className={`absolute left-0 top-full z-30 mt-2 min-w-[220px] rounded-2xl border border-white/10 bg-neutral-900/95 p-2 shadow-xl backdrop-blur`}
// //             role="menu"
// //           >
// //             {item.children.map((child, idx) => (
// //               <DesktopDropdownItem key={idx} item={child} />
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }

// // function DesktopDropdownItem({ item }) {
// //   const hasChildren = Array.isArray(item.children) && item.children.length > 0;
// //   const [open, setOpen] = useState(false);
// //   const ref = useRef(null);
// //   // useOnClickOutside(ref, () => setOpen(false));

// //   return (
// //     <div
// //       ref={ref}
// //       className="relative group"
// //       onMouseEnter={() => setOpen(true)}
// //       onMouseLeave={() => setOpen(false)}
// //     >
// //       <Link
// //         to={item.to || "#"}
// //         className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl hover:bg-white/10 text-sm"
// //         role="menuitem"
// //         // onClick={(e) => {
// //         //   if (hasChildren) {
// //         //     e.preventDefault();
// //         //     setOpen((v) => !v);
// //         //   }
// //         // }}
// //       >
// //         {item.label}
// //         {hasChildren && (
// //           <ChevronDown
// //             className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
// //           />
// //         )}
// //       </Link>

// //         {hasChildren && (
// //       <AnimatePresence>
// //          { open && (
// //           <motion.div
// //             initial={{ opacity: 0, y: 8 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: 8 }}
// //             transition={{ duration: 0.18 }}
// //             className="absolute left-full top-0 z-40 ml-2 min-w-[220px] rounded-2xl border border-white/10 bg-neutral-900/95 p-2 shadow-xl backdrop-blur"
// //             role="menu"
// //           >
// //             {item.children.map((child, idx) => (
// //               <DesktopDropdown
// //                 key={idx}
// //                 href={child.href}
// //                 className="absolute left-full top-0 z-40 ml-2 min-w-[220px] rounded-2xl border border-white/10 bg-neutral-900/95 p-2 shadow-xl backdrop-blur"
// //                 role="menuitem"
// //                 item={child}
// //               />
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //         )}
// //     </div>
// //   );
// // }

// // ====== MOBILE NAV ======
// // function MobileItem({ item, depth = 0 }) {
// //   const [open, setOpen] = useState(false);
// //   const hasChildren = Array.isArray(item.children) && item.children.length > 0;

// //   return (
// //     <div className="w-full">
// //       <div className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-white/5">
// //         <a
// //           href={item.href}
// //           className="text-sm font-medium"
// //           onClick={(e) => hasChildren && e.preventDefault()}
// //         >
// //           {item.label}
// //         </a>
// //         {hasChildren && (
// //           <button
// //             aria-label={open ? "Collapse" : "Expand"}
// //             aria-expanded={open}
// //             onClick={() => setOpen((v) => !v)}
// //             className="p-2 rounded-lg hover:bg-white/10"
// //           >
// //             <ChevronDown
// //               className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
// //             />
// //           </button>
// //         )}
// //       </div>

// //       <AnimatePresence initial={false}>
// //         {hasChildren && open && (
// //           <motion.div
// //             initial={{ height: 0, opacity: 0 }}
// //             animate={{ height: "auto", opacity: 1 }}
// //             exit={{ height: 0, opacity: 0 }}
// //             transition={{ duration: 0.2 }}
// //             className="pl-4 border-l border-white/10 ml-6"
// //           >
// //             {item.children.map((child, idx) => (
// //               <MobileItem key={idx} item={child} depth={depth + 1} />
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }

// // ====== MAIN NAVBAR ======
// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { href, Link } from "react-router-dom";
// import useLockBodyScroll from "./UseLockBodyScroll";
// import { MenuIcon, CloseIcon } from "./Icons";
// import { DesktopDropdown } from "./DesktopDropdown";
// import { MobileItem } from "./MobileNavbar";
// import { MENU } from "./MenuData";


// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [corporateMode, setCorporateMode] = useState(true); // ✅ toggle ke liye
//   const navRef = useRef(null);
//   useLockBodyScroll(mobileOpen);

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur
//         ${corporateMode
//           ? "bg-gradient-to-b from-blue-950/90 to-blue-900/80"   // Corporate look
//           : "bg-gradient-to-b from-green-900/90 to-teal-800/80"  // Friendly look
//         }
//       `}
//     >
//       <nav className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Brand */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="h-8 w-8 rounded-b-2xl bg-white/50 flex items-center justify-center shadow-inner">
//               <span
//                 className={`
//                   font-extrabold text-2xl
//                   bg-gradient-to-r ${corporateMode
//                     ? "from-blue-800 via-teal-500 to-green-400"
//                     : "from-amber-400 via-yellow-300 to-orange-500"}
//                   text-transparent bg-clip-text
//                   drop-shadow-[0_0_8px_rgba(20,184,166,0.7)]
//                   animate-bounce [animation-duration:2s]
//                   transition duration-300
//                   hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]
//                 `}
//               >
//                 UC
//               </span>
//             </div>
//             <span
//               className={`
//                 text-base font-semibold tracking-tight transition duration-300
//                 ${corporateMode
//                   ? "text-blue-100 hover:text-amber-400"
//                   : "text-yellow-100 hover:text-emerald-300"}
//               `}
//             >
//               UnityCare Pharmacy
//             </span>
//           </Link>

//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center gap-1">
//             {MENU.map((item, idx) => (
//               <DesktopDropdown key={idx} item={item} />
//             ))}
//           </div>

//           {/* Desktop actions */}
//           <div className="hidden md:flex items-center gap-2">
//             <a
//               href="#login"
//               className="px-4 py-2 text-sm rounded-xl hover:bg-white/10"
//             >
//               Log in
//             </a>
//             <a
//               href="#signup"
//               className="px-4 py-2 text-sm rounded-xl bg-white text-neutral-900 font-semibold hover:bg-white/90"
//             >
//               Sign up
//             </a>

//             {/* ✅ Mode toggle button */}
//             <button
//               onClick={() => setCorporateMode(!corporateMode)}
//               className="px-3 py-1.5 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white"
//             >
//               {corporateMode ? "Friendly Mode" : "Corporate Mode"}
//             </button>
//           </div>

//           {/* Mobile toggle */}
//           <button
//             className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-white/10 text-white"
//             aria-label={mobileOpen ? "Close menu" : "Open menu"}
//             aria-expanded={mobileOpen}
//             onClick={() => setMobileOpen((v) => !v)}
//           >
//             {mobileOpen ? <CloseIcon /> : <MenuIcon />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile drawer */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.aside
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "80vh", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.22 }}
//             className={`fixed w-full md:hidden border-t border-white/10 backdrop-blur overflow-y-scroll
//               ${corporateMode
//                 ? "bg-blue-950/95"
//                 : "bg-green-900/95"}
//             `}
//             ref={navRef}
//           >
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-2">
//               {MENU.map((item, idx) => (
//                 <MobileItem key={idx} item={item} />
//               ))}
//               <div className="pt-2 flex gap-2">
//                 <a
//                   href="#login"
//                   className="flex-1 text-center px-4 py-2 text-sm rounded-xl hover:bg-white/10"
//                 >
//                   Log in
//                 </a>
//                 <a
//                   href="#signup"
//                   className="flex-1 text-center px-4 py-2 text-sm rounded-xl bg-white text-neutral-900 font-semibold hover:bg-white/90"
//                 >
//                   Sign up
//                 </a>
//               </div>

//               {/* ✅ Mobile toggle button */}
//               <button
//                 onClick={() => setCorporateMode(!corporateMode)}
//                 className="w-full mt-3 px-3 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white"
//               >
//                 {corporateMode ? "Friendly Mode" : "Corporate Mode"}
//               </button>
//             </div>
//           </motion.aside>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }



import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import useLockBodyScroll from "./UseLockBodyScroll";
import { MenuIcon, CloseIcon } from "./Icons";
import { DesktopDropdown } from "./DesktopDropdown";
import { MobileItem } from "./MobileNavbar";
import { MENU } from "./MenuData";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [corporateMode, setCorporateMode] = useState(true);
  const navRef = useRef(null);
  useLockBodyScroll(mobileOpen);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur bg-gradient-to-b from-green-900/90 to-teal-800/80
        `}
        // ${corporateMode
        //   ? "bg-gradient-to-b from-blue-950/90 to-blue-900/80"
        //   : "bg-gradient-to-b from-green-900/90 to-teal-800/80"
        // }
    >
      <nav className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            {/* <div className="h-8 w-8 rounded-b-2xl bg-white/50 flex items-center justify-center shadow-inner">
              <span
                className={`
                  font-extrabold text-xl sm:text-xl md:text-2xl
                  bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500
                   
                  text-transparent bg-clip-text
                  drop-shadow-[0_0_8px_rgba(20,184,166,0.7)]
                  animate-bounce [animation-duration:2s]
                  transition duration-300
                  hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]
                `}
                // ${corporateMode
                //     ? "from-blue-800 via-teal-500 to-green-400"
                //     : "from-amber-400 via-yellow-300 to-orange-500"}
              >
                UC
              </span>
            </div>
            <span
              className={`
                text-sm sm:text-base md:text-lg font-semibold tracking-tight transition duration-300 text-yellow-100 hover:text-transparent hover:bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 bg-clip-text
                `}
                // ${corporateMode
                //   ? "text-blue-100 hover:text-amber-400"
                //   : "text-yellow-100 hover:text-emerald-300"}
            >
              UnityCare Pharmacy
            </span> */}
            <img src='/logo3.png' className="w-20 transition-opacity " alt="" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-1">
            {MENU.map((item, idx) => (
              <DesktopDropdown key={idx} item={item} />
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#login"
              className="px-4 py-2 text-sm rounded-xl hover:bg-white/10"
            >
              Log in
            </a>
            <a
              href="#signup"
              className="px-4 py-2 text-sm rounded-xl bg-white text-neutral-900 font-semibold hover:bg-white/90"
            >
              Sign up
            </a>
            {/* <button
              onClick={() => setCorporateMode(!corporateMode)}
              className="px-3 py-1.5 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white"
            >
              {corporateMode ? "Friendly Mode" : "Corporate Mode"}
            </button> */}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-white/10 text-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "80vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className={`fixed inset-x-0 top-16 bottom-0 w-full lg:hidden border-t border-white/10 backdrop-blur overflow-y-auto bg-green-900/95
              `}
              // ${corporateMode ? "bg-blue-950/95" : "bg-green-900/95"}
            ref={navRef}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {MENU.map((item, idx) => (
                <MobileItem key={idx} item={item}  closeMenu={()=>setMobileOpen(false)}/>
              ))}
              <div className="pt-2 flex gap-2">
                <a
                  href="#login"
                  className="flex-1 text-center px-4 py-2 text-sm rounded-xl hover:bg-white/10"
                >
                  Log in
                </a>
                <a
                  href="#signup"
                  className="flex-1 text-center px-4 py-2 text-sm rounded-xl bg-white text-neutral-900 font-semibold hover:bg-white/90"
                >
                  Sign up
                </a>
              </div>
              {/* <button
                onClick={() => setCorporateMode(!corporateMode)}
                className="w-full mt-3 px-3 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white"
              >
                {corporateMode ? "Friendly Mode" : "Corporate Mode"}
              </button> */}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}

