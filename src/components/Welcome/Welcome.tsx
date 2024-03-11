import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Option } from "../../interfaces/Global";
import styles from "./Welcome.module.css";
import { AppContext } from "../../context/appContext";
import { getString } from "../../utils/language";
import Showcase from "../3D/Scenes/ShowcaseBG";

export const Welcome = () => {
  const {language} = useContext(AppContext);

  return (
    <div className={styles["welcome-container"]}>
      <div className={styles["welcome-column"]}>
        <div className={styles["welcome-avatar"]}>
          <img src="/avatar_real.png" alt="Description of your image"/>
        </div>
      </div>
      <div className={styles["welcome-data"]}>
        <div className={styles["welcome-name"]}>
          <p style={{ color: "black" }}>Gerardo&nbsp;</p>
          <p style={{ color: "black" }}>Lerma&nbsp;</p>
          {/* <p>👋</p> */}
        </div>
        <p className={styles["welcome-subtitle"]}>{getString(language, "degree")}</p>
        <p className={styles["welcome-bio"]}>{getString(language, "bio")}</p>
      </div>
    </div>

  );
}

export default Welcome;