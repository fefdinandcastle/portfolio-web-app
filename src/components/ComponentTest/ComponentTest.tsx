import {  useRef } from "react";

import ShowcaseBG from "../3D/Scenes/ShowcaseBG";


export const ComponentTest = () => {

	// console.log(`[ComponentTest - R]`);

	const containerRef = useRef(null);

	return (

		<ShowcaseBG scrollableRef={containerRef} />

	);
}

export default ComponentTest;