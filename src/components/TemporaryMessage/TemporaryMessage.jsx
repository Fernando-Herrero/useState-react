import { useState } from "react";
import "./TemporaryMessage.css";

export const TemporaryMessage = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleVisible = () => {
		setIsVisible(true);

		setTimeout(() => {
			setIsVisible(false);
		}, 2000);
	};

	return (
		<div className="container-timeout">
			{isVisible && <h1>This is a disappearing message</h1>}
			<button onClick={handleVisible}>Show message</button>
		</div>
	);
};
