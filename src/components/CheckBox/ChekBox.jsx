import { useState } from "react";
import "./CheckBox.css";

export const CheckBox = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChecked = (e) => {
		setIsChecked(e.target.checked);
	};

	return (
		<div className="checkbox">
			<label htmlFor="accept">I agree to the terms</label>
			<input type="checkbox" id="accept" onChange={handleChecked} />
			<span>{isChecked ? "Accepted" : "Not accepted"}</span>
		</div>
	);
};
