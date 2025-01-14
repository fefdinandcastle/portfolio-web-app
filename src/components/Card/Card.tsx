import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Option } from "../../interfaces/Global";
import styles from "./Card.module.css";
import Welcome from "../Welcome/Welcome";
import Showcase from "../3D/Scenes/ShowcaseBG";
import ShowcaseBG from "../3D/Scenes/ShowcaseBG";
import PlumbobScene from "../3D/Scenes/PlumbobScene";
import Skills from "../Sections/Skills/Skills";
import Sky from "../Sections/Sky/Sky";
import { getString } from "../../utils/language";
import { AppContext } from "../../context/appContext";

export const Card = () => {
  const { language } = useContext(AppContext);
	return (
    <div className={styles["card-test"]}>
      <div className={styles["page-sections"]}>
        <Skills/>
        <Sky/>
      </div>
    </div>
	);
}

export default Card;