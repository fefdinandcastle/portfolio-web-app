export interface SkillInterface {
  id: string;
  name: string;
  logo: string;           // emoji o URL
  categories: Category[];
  tags: string[];         // 2-3 etiquetas visibles en reposo
  highlights: string[];   // puntos que aparecen en hover
  theme: SkillTheme;
}

export type SkillTheme =
  | "react"
  | "typescript"
  | "vue"
  | "tailwind"
  | "node"
  | "figma"
  | "next"
  | "postgres"
  | "swift"
  | "css";

export interface Option {
  value: string;
  label: string;
}

export type Category = "frontend" | "backend" | "design";

const themeConfig: Record<SkillTheme, {
  bg: string;
  border: string;
  glow: string;
  dot: string;
  tagText: string;
  highlightBg: string;
}> = {
  react:      { bg: "bg-cyan-500/10",    border: "border-cyan-400/30",    glow: "shadow-cyan-400/15",    dot: "bg-cyan-400",    tagText: "text-cyan-700 dark:text-cyan-300",    highlightBg: "bg-cyan-500/90"    },
  typescript: { bg: "bg-blue-600/10",    border: "border-blue-500/30",    glow: "shadow-blue-500/15",    dot: "bg-blue-500",    tagText: "text-blue-700 dark:text-blue-300",    highlightBg: "bg-blue-600/90"    },
  vue:        { bg: "bg-emerald-500/10", border: "border-emerald-400/30", glow: "shadow-emerald-400/15", dot: "bg-emerald-400", tagText: "text-emerald-700 dark:text-emerald-300", highlightBg: "bg-emerald-500/90" },
  tailwind:   { bg: "bg-sky-500/10",     border: "border-sky-400/30",     glow: "shadow-sky-400/15",     dot: "bg-sky-400",     tagText: "text-sky-700 dark:text-sky-300",     highlightBg: "bg-sky-500/90"     },
  node:       { bg: "bg-green-600/10",   border: "border-green-500/30",   glow: "shadow-green-500/15",   dot: "bg-green-500",   tagText: "text-green-700 dark:text-green-300",   highlightBg: "bg-green-600/90"   },
  figma:      { bg: "bg-purple-500/10",  border: "border-purple-400/30",  glow: "shadow-purple-400/15",  dot: "bg-purple-400",  tagText: "text-purple-700 dark:text-purple-300",  highlightBg: "bg-purple-500/90"  },
  next:       { bg: "bg-slate-500/10",   border: "border-slate-400/30",   glow: "shadow-slate-400/15",   dot: "bg-slate-500",   tagText: "text-slate-600 dark:text-slate-300",   highlightBg: "bg-slate-700/90"   },
  postgres:   { bg: "bg-indigo-500/10",  border: "border-indigo-400/30",  glow: "shadow-indigo-400/15",  dot: "bg-indigo-400",  tagText: "text-indigo-700 dark:text-indigo-300",  highlightBg: "bg-indigo-500/90"  },
  swift:      { bg: "bg-orange-500/10",  border: "border-orange-400/30",  glow: "shadow-orange-400/15",  dot: "bg-orange-400",  tagText: "text-orange-700 dark:text-orange-300",  highlightBg: "bg-orange-500/90"  },
  css:        { bg: "bg-pink-500/10",    border: "border-pink-400/30",    glow: "shadow-pink-400/15",    dot: "bg-pink-400",    tagText: "text-pink-700 dark:text-pink-300",    highlightBg: "bg-pink-500/90"    },
};


export default themeConfig;