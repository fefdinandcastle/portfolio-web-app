import React from "react";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../data/translations";

const stats = [
  { key: "yearsLabel", value: "3+" },
  { key: "projectsLabel", value: "20+" },
  { key: "coffeeLabel", value: "∞" },
];

const About: React.FC = () => {
  const { lang } = useLang();
  const about = t[lang].about;

  return (
    <section id="about" className="py-24 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: title + stats */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-amber-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">
                {about.title}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-10">
              Turning ideas into
              <br />
              <span className="text-amber-500">real software.</span>
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.key} className="text-center md:text-left">
                  <div className="font-display text-3xl font-bold text-stone-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-stone-500 leading-snug">
                    {about[stat.key as keyof typeof about]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: paragraphs */}
          <div className="space-y-5">
            {[about.p1, about.p2, about.p3].map((p, i) => (
              <p key={i} className="text-stone-600 leading-relaxed text-base">
                {p}
              </p>
            ))}

            {/* Small decorative element */}
            <div className="pt-4 flex gap-2">
              {["#opentowork", "#fullstack", "#typescript"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-stone-100 text-stone-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;