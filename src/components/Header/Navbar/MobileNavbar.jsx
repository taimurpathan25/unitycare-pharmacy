
// ====== IMPORTS =====
import { href, Link } from "react-router-dom";
import { ChevronDown } from "./Icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// ====== MOBILE NAV ======
export function MobileItem({ item, depth = 0 }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  return (
    <div className="w-full">
      <div className={`flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-white/5 text-white
      ${open ? "text-amber-400":"text-amber-50"}
        `}>
        <Link
          to={item.to || "#"}
          className="text-sm font-medium"
          onClick={(e) => {
            if (hasChildren) {
              e.preventDefault();
              setOpen((v) => !v);
            } else {
              closeMenu?.();  // ✅ yahan drawer band hoga
            }
          }}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            aria-label={open ? "Collapse" : "Expand"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg hover:bg-white/10"
          >
            <ChevronDown
              className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        )}
      </div>

      <AnimatePresence initial={false}>
        {hasChildren && open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-4 border-l border-white/10 ml-6 h-10"
          >
            {item.children.map((child, idx) => (
              <MobileItem key={idx} item={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}