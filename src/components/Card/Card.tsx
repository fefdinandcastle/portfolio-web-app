import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Option } from "../../interfaces/Global";
import styles from "./Card.module.css";
import Welcome from "../Welcome/Welcome";
import Showcase from "../3D/Scenes/ShowcaseBG";
import ShowcaseBG from "../3D/Scenes/ShowcaseBG";
import PlumbobScene from "../3D/Scenes/PlumbobScene";
import Skills from "../Sections/Skills/Skills";
import Experience from "../Sections/Experience/Experience";

export const Card = () => {
	return (
    <div className={styles["card-test"]}>
      <div className={styles["page-sections"]}>
        <Skills/>
        <Experience/>
      </div>
    </div>
	);
}

export default Card;