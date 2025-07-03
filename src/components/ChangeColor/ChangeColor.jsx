import { useState } from "react";
import "./ChangeColor.css";
import bgPic from "../../assets/bg-pic.avif";

export const ChangeColor = () => {
	const [color, setColor] = useState(true);

	const toggleColor = () => {
		setColor((prev) => !prev);
	};

	return (
		<div className="container-color" style={{ backgroundColor: color ? "red" : "green" }}>
			<img src={bgPic} alt="bg-pic" />
			<button onClick={toggleColor} style={{ backgroundColor: color ? "#28a745" : "red" }}>
				Change color
			</button>
		</div>
	);
};
