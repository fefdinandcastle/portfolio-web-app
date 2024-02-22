import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Option } from "../../interfaces/Global";
import styles from "./Content.module.css";
import Welcome from "../Welcome/Welcome";
import Showcase from "../3D/Scenes/Showcase";
import Skills from "../Skills/Skills";

export const Content = () => {

	return (
		// <div className={styles["content-parent"]}>
		<main>
			<div className={styles["content-container"]}>
				<div className={styles["banner"]}>
					<Showcase />
					<div className={styles["banner-container"]}>
						<div style={{ width: "100%", height: "100%", position: "absolute", backgroundColor: "#ffffff99" }} />
						<div className={styles["banner-data"]}>
							<Welcome />
						</div>
					</div>
				</div>
				<div className={styles["page-sections"]}>
					<Skills />
				</div>
				

			</div>
		</main>
		// </div>
	);
}

export default Content;