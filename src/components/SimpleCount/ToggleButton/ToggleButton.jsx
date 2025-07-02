import { useState } from "react";
import "./ToggleButton.css";

export const ToggleButton = () => {
	const [toggle, setToggle] = useState(true);

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};

	return (
		<>
			<button onClick={handleToggle}>{toggle ? "Encendido ☀️" : "Apagado 🌙"}</button>
		</>
	);
};
