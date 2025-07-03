import { useState } from "react";
import "./EditableText.css";

export const EditableText = () => {
	const [text, setText] = useState("This is an editable text");

	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		setIsVisible(isVisible ? false : true);
	};

	const handleText = (e) => {
		setText(e.target.value);
	};

	const handleBlur = () => {
		setIsVisible(false);
	};

	return (
		<div className="container-h1">
			<h1 onClick={handleClick}>{text}</h1>
			{isVisible && (
				<input
					type="text"
					name="text"
					id="text"
					autoFocus
					value={text}
					onChange={handleText}
					onBlur={handleBlur}
				/>
			)}
		</div>
	);
};
