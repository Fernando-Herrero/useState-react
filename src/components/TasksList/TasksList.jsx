import "./TasksList.css";

export const TasksList = () => {
	const tasks = ["Buy groceries", "Clean the house", "Finish homework", "Call the bank"];

	const renderTasks = (tasks) => {
		tasks.forEach((task, index) => {
			<li key={index}>{task}</li>;
		});
	};

	return (
		<div className="container-tasks">
			<ul className="tasks-list">{renderTasks(tasks)}</ul>
		</div>
	);
};
