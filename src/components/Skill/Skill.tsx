import { FC, useState } from "react";
import styles from "./Skill.module.css";
import { Option } from "../../interfaces/Global";
import { SkillInterface } from "../../utils/skills";

interface SkillProps {
	skill: SkillInterface
}

export const Skill: FC<SkillProps> = ({ skill }) => {

	return (
		<div className={styles["skill-container"]} style={{background: `linear-gradient(to right, #EEEEEE, #EEEEEE)`}}>
      <div className={styles["skill-data-container"]}>
        <img className={styles["skill-image"]} src={`${skill.logo}`} alt=""/>
        <p style={{fontWeight: "500"}}>{skill.title}</p>
        <p style={{fontWeight: "600"}}>{skill.yearsExperience} {skill.yearsExperience > 1 ? "years" : "year"}</p>
      </div>
    </div>
  );
}

export default Skill;