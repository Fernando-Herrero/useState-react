import { useState } from "react";
import "./TasksList.css";

export const TasksList = () => {
	const [tasks, setTasks] = useState(["Buy groceries", "Clean the house", "Finish homework", "Call the bank"]);

	const renderTasks = (tasks) => {
		return tasks.map((task, index) => {
			return <li key={index}>{task}</li>;
		});
	};

	const handleAddTasks = () => {
		const newTask = addTask.trim();
		if (newTask.length === 0) return;

		setTasks((prevTasks) => [...prevTasks, newTask]);
		setAddTask("");
	};

	const [addTask, setAddTask] = useState("");

	const handleTask = (e) => {
		setAddTask(e.target.value);
	};

	return (
		<div className="container-tasks">
			<ul className="tasks-list">{renderTasks(tasks)}</ul>
			<label htmlFor="task-list">Add tasks:</label>
			<input type="text" id="task-list" value={addTask} onChange={handleTask} />
			<button onClick={handleAddTasks} type="submit">
				Add
			</button>
		</div>
	);
};
