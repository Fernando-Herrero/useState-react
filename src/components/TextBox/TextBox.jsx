import { useState } from "react";
import "./TextBox.css";

export const TextBox = () => {
	const [text, setText] = useState("");

	const handleText = (event) => {
		setText(event.target.value);
	};

	return (
		<div className="textbox-container">
			<label htmlFor="username">Username:</label>
			<input type="text" id="username" name="username" onChange={handleText} value={text} />
			<p>Binvenido, {text}</p>
		</div>
	);
};
