import { FC, useContext, useState } from "react";
import styles from "./Skill.module.css";
import { Option } from "../../interfaces/Global";
import themeConfig, { SkillInterface } from "../../utils/skills";
import { getString } from "../../utils/language";
import { AppContext } from "../../context/appContext";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface SkillProps {
  skill: SkillInterface;
}

export const Skill: FC<SkillProps> = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  const t = themeConfig[skill.theme];

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl p-4
        backdrop-blur-md border
        transition-all duration-300 ease-out cursor-default
        min-h-[168px] flex flex-col justify-between
        ${t.bg} ${t.border}
        shadow-lg ${t.glow}
        ${hovered ? "-translate-y-1 scale-[1.02]" : ""}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glare superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      {/* Reflejo diagonal */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-2xl" />

      {/* Contenido principal */}
      <div className="relative z-10">
        <div className="text-3xl mb-2 leading-none">{skill.logo}</div>
        <p className="text-sm font-semibold text-gray-800 tracking-tight">{skill.name}</p>
        <div className="mt-2 flex flex-col gap-1">
          {skill.tags.map((tag) => (
            <span key={tag} className={`text-[11px] flex items-center gap-1.5 ${t.tagText}`}>
              <span className={`w-1 h-1 rounded-full shrink-0 ${t.dot}`} />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Panel de highlights — aparece en hover */}
      <div
        className={`
          absolute inset-0 rounded-2xl flex flex-col justify-center px-4 py-4
          backdrop-blur-sm
          transition-opacity duration-250 ease-out
          ${t.highlightBg}
          ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-2">
          Highlights
        </p>
        <ul className="flex flex-col gap-1.5">
          {skill.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[12px] text-white/95 leading-snug">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0 mt-[4px]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skill;