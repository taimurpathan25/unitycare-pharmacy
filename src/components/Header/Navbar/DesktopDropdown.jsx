// ====== IMPORTS ======
import { AnimatePresence ,motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { href, Link } from "react-router-dom";
import { ChevronDown } from "./Icons";


// Custom Hook :- Click outside utility (kept for dropdowns)
 function useOnClickOutside(ref, handler) {
  useEffect(() => {
    function listener(e) {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// ====== DESKTOP NAV ======
export function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  return (
    <div
      ref={ref}
      className="relative text-white"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link to={item.to || "#"}
        className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 focus:outline-none"
        aria-haspopup={hasChildren ? "menu" : undefined}
        aria-expanded={open}
        onClick={() => (hasChildren ? setOpen((v) => !v) : null)}
      >
        <span className="text-sm text-amber-50 font-medium">{item.label}</span>
        {hasChildren && (
          <ChevronDown
            className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          />
        )}
      </Link>

      <AnimatePresence>
        {hasChildren && open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className={`absolute left-0 top-full z-30 mt-3 min-w-[220px] rounded-2xl border border-white/10 bg-gradient-to-b from-green-900/90 to-teal-800/80 p-2 shadow-xl backdrop-blur`}
            role="menu"
          >
            {item.children.map((child, idx) => (
              <DesktopDropdownItem key={idx} item={child} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DesktopDropdownItem({ item }) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={item.to || "#"}
        className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl hover:bg-white/10 text-sm"
        role="menuitem"
        // onClick={(e) => {
        //   if (hasChildren) {
        //     e.preventDefault();
        //     setOpen((v) => !v);
        //   }
        // }}
      >
        {item.label}
        {hasChildren && (
          <ChevronDown
            className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          />
        )}
      </Link>

        {hasChildren && (
      <AnimatePresence>
         { open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-full top-0 z-40 ml-2 min-w-[220px] rounded-2xl border border-white/10 bg-gradient-to-b from-green-900/90 to-teal-800/80 p-2 shadow-xl backdrop-blur"
            role="menu"
          >
            {item.children.map((child, idx) => (
              <DesktopDropdown
                key={idx}
                href={child.href}
                className="absolute left-full top-0 z-40 ml-2 min-w-[220px] rounded-2xl border border-white/10 bg-neutral-900/95 p-2 shadow-xl backdrop-blur"
                role="menuitem"
                item={child}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
        )}
    </div>
  );
}