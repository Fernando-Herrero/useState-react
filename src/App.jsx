import "./App.css";
import { SimpleCount } from "./components/SimpleCount/SimpleCount.jsx";
import { ToggleButton } from "./components/ToggleButton/ToggleButton.jsx";
import { TextBox } from "./components/TextBox/TextBox.jsx";

export const App = () => {
	return (
		<>
			<SimpleCount />
			<ToggleButton />
			<TextBox />
		</>
	);
};
