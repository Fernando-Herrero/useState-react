import { useState } from "react";
import "./Tabs.css";

export const Tabs = () => {
	const [activeTab, setActiveTab] = useState("home");

	// const handleActiveTab = (tab) => {
	// 	setActiveTab(tab);
	// };

	return (
		<div className="tabs">
			{activeTab === "home" && <p>🏠</p>}
			<button onClick={() => setActiveTab("home")}>Home</button>
			{activeTab === "profile" && <p>👤</p>}
			<button onClick={() => setActiveTab("profile")}>Profile</button>
			{activeTab === "settings" && <p>⚙️</p>}
			<button onClick={() => setActiveTab("settings")}>Setting</button>
		</div>
	);
};
