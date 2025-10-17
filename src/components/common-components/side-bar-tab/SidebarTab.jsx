// File: SidebarTab.jsx
import React, { useState } from "react";

const items = [
  { id: "overview", title: "Overview", content: "Yeh overview ka content hai. Yahaan summary ya introduction dalein." },
  { id: "features", title: "Features", content: "Yeh features ka content hai. Feature 1, Feature 2, Feature 3..." },
  { id: "pricing", title: "Pricing", content: "Yeh pricing ka content hai. Plans: Free, Pro, Enterprise..." },
  { id: "contact", title: "Contact", content: "Yeh contact ka content hai. Email: hello@example.com, Phone: 0123456789" },
];

export default function SidebarTab({ data = items }) {
  const [active, setActive] = useState(data[0]?.id ?? null);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-8">
      {/* Left: Links */}
      <nav
        className="w-full md:w-1/4 bg-white/80 dark:bg-gray-800/60 rounded-xl shadow p-3"
        aria-label="Sidebar links"
      >
        <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
          {data.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id} className="w-full">
                <button
                  onClick={() => setActive(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActive(item.id);
                    }
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-150 focus:outline-none
                    ${isActive ? "bg-indigo-600 text-white shadow-lg" : "hover:bg-gray-100 dark:hover:bg-gray-700"}
                  `}
                  aria-current={isActive ? "true" : "false"}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.title}</span>
                    {isActive && <span className="text-sm opacity-90">Selected</span>}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Right: Content */}
      <main className="w-full md:w-3/4 bg-white/90 dark:bg-gray-900/70 rounded-xl shadow p-6">
        {data.map((item) =>
          item.id === active ? (
            <section key={item.id} aria-labelledby={`title-${item.id}`}>
              <h2 id={`title-${item.id}`} className="text-2xl font-semibold mb-3">
                {item.title}
              </h2>
              <div className="prose max-w-none">
                <p>{item.content}</p>
                {/* aap yahan aur complex JSX ya components render kar sakte hain */}
              </div>
            </section>
          ) : null
        )}
      </main>
    </div>
  );
}
