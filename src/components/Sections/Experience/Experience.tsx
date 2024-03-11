import { useContext, useEffect, useRef} from "react";
import styles from "./Experience.module.css";
import { AppContext } from "../../../context/appContext";
import { getString } from "../../../utils/language";

export const Experience = () => {
  const { language } = useContext(AppContext);
  const observedElementRef = useRef(null);


  return (
    <div className={styles["content"]}>
      <h1>{getString(language, "experience")}</h1>
      <div className={styles["background-container"]} ref={observedElementRef}>
        {/* <div className={styles["background-animation"]} /> */}
        {/* <canvas id="gradient-canvas" className={styles["canvas-test"]}/> */}
        <div className={styles["info-root-container"]} >
          <div className={styles["info-container"]}>
            <div className={styles["info-container-first"]} >
              <img className={styles["logo"]} src="/assets_2d/skymas.png" />
              <h1>{getString(language, "skymas-title")}</h1>
              <p>{getString(language, "skymas-description")}</p>
              <a className={styles["info-button"]} 
                 href="https://skymas.mx" 
                 rel="noopener noreferrer"
                 target="_blank">
                  {getString(language, "skymas-button")}</a>
            </div>
            <div className={styles["info-container-second"]} >
              <h1>{getString(language, "skymas-tasks-title")}</h1>
              <p>- {getString(language, "skymas-task-1")}</p>
              <p>- {getString(language, "skymas-task-2")}</p>
              <p>- {getString(language, "skymas-task-3")}</p>
            </div>
          </div>

        </div>

        {/* <div style={{backgroundColor: "red"}}></div> */}

      </div>


    </div>

  );
}

export default Experience;