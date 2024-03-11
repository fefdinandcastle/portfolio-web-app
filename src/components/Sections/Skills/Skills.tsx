import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Option } from "../../../interfaces/Global";
import styles from "./Skills.module.css";
import { AppContext } from "../../../context/appContext";
import { getString } from "../../../utils/language";
import Capsules from "../../Capsules/Capsules";
import skillsData, { Category, SkillInterface } from "../../../utils/skills";
import Skill from "../../Skill/Skill";
export const Skills = () => {
  const { language } = useContext(AppContext);
  const categories: Option[] = [
    {value: "frontend", label: "Frontend"},
    {value: "backend", label: "Backend"},
    {value: "design", label: "Design"},
  ];
  const [selectedCategory, setSelectedCategory] = useState<Option>(categories[0]);
  const [skills, setSkills] = useState<SkillInterface[]>([]);

  const onCategorySelect = (category: Option) => {
    setSelectedCategory(category);
  }

  useEffect(() => {
    const filteredSkills : SkillInterface[] = skillsData.filter((skill: SkillInterface) => {
      return skill.categories.includes(selectedCategory.value as Category);
    });
    setSkills(filteredSkills);
  },[selectedCategory]);

  return (
    <div className={styles["content"]}>
      <h1>{getString(language, "skills")}</h1>
      <Capsules options={categories} onSelect={onCategorySelect} defaultOption={categories[0]}/>
      {/* {`SelectedCategory: ${selectedCategory.label}`} */}
      <div className={styles["skills-container"]}>
        {skills && skills.map((skill: SkillInterface) => {
          return <Skill skill={skill}/>
        })}
      </div>
     
    </div>

  );
}

export default Skills;