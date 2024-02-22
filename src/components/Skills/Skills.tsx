import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Option } from "../../interfaces/Global";
import styles from "./Skills.module.css";
import { AppContext } from "../../context/appContext";
import { getString } from "../../utils/language";
import Capsules from "../Capsules/Capsules";
import skillsData, { Category, Skill } from "../../utils/skills";
export const Skills = () => {
  const { language } = useContext(AppContext);
  const categories: Option[] = [
    {value: "frontend", label: "Frontend"},
    {value: "backend", label: "Backend"},
    {value: "design", label: "Design"},
  ];
  const [selectedCategory, setSelectedCategory] = useState<Option>(categories[0]);
  const [skills, setSkills] = useState<Skill[]>([]);

  const onCategorySelect = (category: Option) => {
    setSelectedCategory(category);
  }

  useEffect(() => {
    const filteredSkills : Skill[] = skillsData.filter((skill: Skill) => {
      return skill.categories.includes(selectedCategory.value as Category);
    });
    setSkills(filteredSkills);
  },[selectedCategory]);

  return (
    <div className={styles["content"]}>
      <h1>{getString(language, "skills")}</h1>
      <Capsules options={categories} onSelect={onCategorySelect} defaultOption={categories[0]}/>
      {`SelectedCategory: ${selectedCategory.label}`}
      {skills && skills.map((skill: Skill) => {
        return <div>{skill.title}</div>
      })}
    </div>

  );
}

export default Skills;