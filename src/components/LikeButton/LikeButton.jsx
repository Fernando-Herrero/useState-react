import { useState } from "react";
import "./LikeButton.css";

export const LikeButton = () => {
	const [likes, setLikes] = useState(0);

	const handleLike = () => {
		setLikes((prev) => prev + 1);
	};

	return (
		<div className="container-likes">
			<span>
				{likes}
				{likes === 0 ? "🤍" : "❤️"}
			</span>
			<button onClick={handleLike}>Like</button>
		</div>
	);
};
