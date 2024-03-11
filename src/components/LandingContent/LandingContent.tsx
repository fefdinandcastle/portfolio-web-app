import { FC, Suspense, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Option } from "../../interfaces/Global";
import styles from "./LandingContent.module.css";
import Welcome from "../Welcome/Welcome";
import ShowcaseBG from "../3D/Scenes/ShowcaseBG";
import PlumbobScene from "../3D/Scenes/PlumbobScene";
import Card from "../Card/Card";

export const LandingContent = () => {

	// console.log(`[LandingContent - R]`);

	const containerRef = useRef(null);

	return (
		// <div className={styles["content-parent"]}>
		<main>
			<div className={styles["content-container"]} ref={containerRef}>
				<div className={styles["banner"]}>
					<Suspense fallback={<div>Holaaaaaaaaa</div>}>
						<ShowcaseBG scrollableRef={containerRef} />
					</Suspense>
					<div className={styles["banner-container"]}>
						{/* <div style={{ width: "100%", height: "100%", position: "absolute", backgroundColor: "#FFFFFFAA" }} /> */}
						<div className={styles["banner-obj-container"]} >
							<Suspense fallback={<div>Hola</div>}>
								<PlumbobScene scrollableRef={containerRef} />
							</Suspense>
						</div>
						<div style={{ width: "100%", height: "100%", position: "absolute", backgroundColor: "#FFFFFF99" }} />
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