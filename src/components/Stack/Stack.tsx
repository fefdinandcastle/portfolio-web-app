import React, { useState } from "react";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../data/translations";
import { StackItem, stackItems } from "../../data/stack";

type Category = "all" | "frontend" | "backend" | "database" | "tools";

const Stack: React.FC = () => {
  const { lang } = useLang();
  const stack = t[lang].stack;
  const [active, setActive] = useState<Category>("all");

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: lang === "en" ? "All" : "Todos" },
    { key: "frontend", label: stack.categories.frontend },
    { key: "backend", label: stack.categories.backend },
    { key: "database", label: stack.categories.database },
    { key: "tools", label: stack.categories.tools },
  ];

  const filtered: StackItem[] =
    active === "all"
      ? stackItems
      : stackItems.filter((i) => i.category === active);

  return (
    <section id="stack" className="py-24 bg-stone-100/60 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">
              {stack.title}
            </span>
            <span className="w-8 h-px bg-amber-400" />
          </div>
          <p className="text-stone-500 text-base">{stack.subtitle}</p>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 justify-center flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.key
                  ? "bg-stone-900 text-stone-50 shadow-sm"
                  : "bg-white border border-stone-200 text-stone-600 hover:border-stone-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center gap-3 bg-white rounded-2xl p-5 border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all duration-200 cursor-default"
            >
              {/* Logo */}
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-9 h-9 object-contain transition-transform duration-200 group-hover:scale-110"
                  onError={(e) => {
                    // fallback: show colored initial
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div style="width:36px;height:36px;border-radius:8px;background:${item.color}22;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;color:${item.color}">${item.name[0]}</div>`;
                    }
                  }}
                />
              </div>
              {/* Name */}
              <span className="text-xs font-semibold text-stone-700 text-center leading-tight">
                {item.name}
              </span>
              {/* Colored underline on hover */}
              <div
                className="h-0.5 w-0 group-hover:w-8 rounded-full transition-all duration-300"
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;