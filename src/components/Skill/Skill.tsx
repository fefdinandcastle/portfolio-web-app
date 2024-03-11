import { FC, useContext, useState } from "react";
import styles from "./Skill.module.css";
import { Option } from "../../interfaces/Global";
import { SkillInterface } from "../../utils/skills";
import { getString } from "../../utils/language";
import { AppContext } from "../../context/appContext";

interface SkillProps {
	skill: SkillInterface
}

export const Skill: FC<SkillProps> = ({ skill }) => {
  const {language} = useContext(AppContext);

	return (
		<div className={styles["skill-container"]} style={{background: `linear-gradient(to right, #EEEEEE, #EEEEEE)`}}>
      <div className={styles["skill-data-container"]}>
        <img className={styles["skill-image"]} src={`${skill.logo}`} alt=""/>
        <p>{skill.title}</p>
        <p style={{fontWeight: "500"}}>{skill.yearsExperience} {`${getString(language, "year")}${skill.yearsExperience > 1 ? "s" : ""}`}</p>
      </div>
    </div>
  );
}

export default Skill;