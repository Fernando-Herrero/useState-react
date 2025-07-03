import { useState } from "react";
import "./ShowHide.css";

export const ShowHide = () => {
	const [isVisible, setIsVisible] = useState(true);

	const handleClick = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className="container-show-hide">
        
			{isVisible && (
				<div>
					<p>Este texto se va a ocultar</p>
				</div>
			)}
			<button onClick={handleClick}>{isVisible ? "Ocultar" : "Mostrar"}</button>
		</div>
	);
};
