import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Option } from "../../../interfaces/Global";
import styles from "./Skills.module.css";
import { AppContext } from "../../../context/appContext";
import { getString } from "../../../utils/language";
import Capsules from "../../Capsules/Capsules";
import { Category, SkillInterface } from "../../../utils/skills";
import Skill from "../../Skill/Skill";
const categories: Option[] = [
  { value: "frontend", label: "Frontend" },
  { value: "backend",  label: "Backend"  },
  { value: "design",   label: "Design"   },
];

const skillsData: SkillInterface[] = [
  {
    id: "react",
    name: "React",
    logo: "⚛️",
    categories: ["frontend"],
    tags: ["Hooks & Context", "React Query", "Testing"],
    highlights: ["Custom hooks reutilizables", "TanStack Query", "Lazy load & Suspense", "Testing con RTL"],
    theme: "react",
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "🔷",
    categories: ["frontend", "backend"],
    tags: ["Generics", "Utility types", "Type guards"],
    highlights: ["Generics avanzados", "Mapped & conditional types", "Strict mode", "Declaration merging"],
    theme: "typescript",
  },
  // ...
];

export const Skills = () => {
  const { language } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState<Option>(categories[0]);
  const [skills, setSkills] = useState<SkillInterface[]>([]);

  useEffect(() => {
    const filtered = skillsData.filter((s: SkillInterface) =>
      s.categories.includes(selectedCategory.value as Category)
    );
    setSkills(filtered);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
        {getString(language, "skills")}
      </h1>
      <Capsules
        options={categories}
        onSelect={setSelectedCategory}
        defaultOption={categories[0]}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;