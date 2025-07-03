import "./App.css";
import { SimpleCount } from "./components/SimpleCount/SimpleCount.jsx";
import { ToggleButton } from "./components/ToggleButton/ToggleButton.jsx";
import { TextBox } from "./components/TextBox/TextBox.jsx";
import { ShowHide } from "./components/ShowHide/ShowHide.jsx";
import { ChangeColor } from "./components/ChangeColor/ChangeColor.jsx";
import { TasksList } from "./components/TasksList/TasksList.jsx";
import { Tabs } from "./components/Tabs/Tabs.jsx";
import { CheckBox } from "./components/CheckBox/ChekBox.jsx";
import { ChangeImage } from "./components/ChangeImage/ChangeImage.jsx";
import { LikeButton } from "./components/LikeButton/LikeButton.jsx";
import { EditableText } from "./components/EditableText/EditableText.jsx";
import { MensajeTemporal } from "./components/MensajeTemporal/MensajeTemporal.jsx";

export const App = () => {
	return (
		<>
			<SimpleCount />
			<ToggleButton />
			<TextBox />
			<ShowHide />
			<ChangeColor />
			<TasksList />
			<Tabs />
			<CheckBox />
			<ChangeImage />
			<LikeButton />
			<EditableText />
			<MensajeTemporal />
		</>
	);
};
