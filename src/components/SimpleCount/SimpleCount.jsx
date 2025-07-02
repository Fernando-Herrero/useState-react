import { useState } from "react";
import "./SimpleCount.css";

export const SimpleCount = () => {
	const [count, setCount] = useState(0);

	// 🧠 Regla de oro:
	// Usa setState(prev => ...) si vas a depender del valor anterior del estado.
	const onIncrement = () => {
		setCount((prev) => prev + 1);
	};

	const onDecrement = () => {
		// setCount(count - 1);
		setCount((prev) => prev - 1);
	};

	const onRestart = () => {
		setCount(0);
	};

	return (
		<>
			<div className="counter-container">
				<h2 className="title">Simple Counter</h2>
				<h3 className="count">{count}</h3>
				<button className="btn increment" onClick={onIncrement}>
					Plus
				</button>
				<button className="btn decrement" onClick={onDecrement}>
					Subtract
				</button>
				<button className="btn restart" onClick={onRestart}>
					Restart
				</button>
			</div>
		</>
	);
};
