import React, { useState } from 'react';
import { Lang } from './types';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
import { Tools } from './components/Tools';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Lang>('es');

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-gray-900 font-sans">
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
      `}</style>

      <Navbar lang={lang} setLang={setLang} />

      <main className="pt-14">
        <Hero           lang={lang} /> 
        <Experience     lang={lang} />
        <Education      lang={lang} />
        <Certifications lang={lang} />
        <Stack          lang={lang} />
        <Projects       lang={lang} />
        <Tools          lang={lang} /> 
      </main>

      <Footer lang={lang} />
    </div>
  );
}