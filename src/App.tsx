import React, { useState } from 'react';
import { Lang } from './types';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
import { Tools } from './components/Tools';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { Employers } from './components/Employers';

export default function App() {
  const [lang, setLang] = useState<Lang>('es');

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-gray-900 font-sans overflow-y-auto h-screen" id="scroll-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Sora', sans-serif; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in       { animation: fadeIn 0.7s ease forwards; }
        .animate-fade-in-delay { animation: fadeIn 0.7s 0.15s ease both; }
        html { scroll-behavior: smooth; }
        @keyframes marquee-fwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-rev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <Navbar lang={lang} setLang={setLang} />

      <main className="pt-14">
        <Hero           lang={lang} />
        <MarqueeStrip   direction="left"  accent="#ffd60a" />
        <Employers      lang={lang} />
        <Experience     lang={lang} />
        <Education      lang={lang} />
        <Stack          lang={lang} />
        <Projects       lang={lang} />
        <Certifications lang={lang} />
        <MarqueeStrip   direction="right" accent="#7c6af7" />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
