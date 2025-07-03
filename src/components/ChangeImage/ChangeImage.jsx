import { useState } from "react";
import "./ChangeImage.css";
import gokuImage from "../../assets/goku.avif";
import vegetaImage from "../../assets/vegeta.png";

export const ChangeImage = () => {
	const [image, setImage] = useState(true);

	const handleImage = () => {
		setImage(!image);
	};

	return (
		<div className="container-dragon-ball">
			<img src={image ? gokuImage : vegetaImage} alt={image ? "Imagen de Goku" : "Imagen de Vegeta"}></img>
			<button onClick={handleImage}>Change Image</button>
		</div>
	);
};
