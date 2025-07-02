import "./App.css";
import { SimpleCount } from "./components/SimpleCount/SimpleCount.jsx";
import { ToggleButton } from "./components/SimpleCount/ToggleButton/ToggleButton.jsx";

export const App = () => {
	return (
		<>
			<SimpleCount />
			<ToggleButton />
		</>
	);
};
