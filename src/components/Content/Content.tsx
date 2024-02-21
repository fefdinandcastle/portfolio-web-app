import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Option } from "../../interfaces/Global";
import styles from "./Content.module.css";
import Welcome from "../Welcome/Welcome";

export const Content = () => {
	
	return (
		// <div className={styles["content-parent"]}>
      <div className={styles["content-container"]}>
        <Welcome/>
      </div>
			
		// </div>
	);
}

export default Content;