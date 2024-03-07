import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Option } from "../../interfaces/Global";
import styles from "./LandingContent.module.css";
import Welcome from "../Welcome/Welcome";
import Showcase from "../3D/Scenes/ShowcaseBG";
import { SkillsSection } from "../SkillsSection/SkillsSection";
import ShowcaseBG from "../3D/Scenes/ShowcaseBG";
import PlumbobScene from "../3D/Scenes/PlumbobScene";
import Card from "../Card/Card";

export const LandingContent = () => {

	console.log(`[LandingContent - R]`);

	const containerRef = useRef(null);

	return (
		// <div className={styles["content-parent"]}>
		<main>
			<div className={styles["content-container"]} ref={containerRef}>
				<div className={styles["banner"]}>
					<ShowcaseBG scrollableRef={containerRef} />
					<div className={styles["banner-container"]}>
						<div style={{ width: "100%", height: "100%", position: "absolute", backgroundColor: "#FFFFFF00" }} />
						<div className={styles["banner-obj-container"]} >
							<PlumbobScene scrollableRef={containerRef} />
						</div>
						<div className={styles["banner-container"]}>
							<div className={styles["banner-data"]}>
								<Welcome />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Card/>
		</main>
		// </div>
	);
}

export default LandingContent;