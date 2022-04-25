/* const item = {
  id: 1,
  task: "Do the dishes",
  completed: false
} */
import { useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Clean stuff",
      completed: false,
    },
    {
      id: 2,
      task: "pick up the kids",
      completed: true,
    },
  ]);

  return (
    <div id="App">
      <form>
        <label htmlFor="name">Task</label>
        <input type="text" id="name" name="task" />
        <button>Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <ListItem {...task} />
        ))}
      </ul>
    </div>
  );
}
