import { useState } from "react";
import "./App.css";
const todos = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Walk the dog" },
  { id: 3, task: "Finish project report" },
  { id: 4, task: "Call mom" },
  { id: 5, task: "Clean the house" },
  { id: 6, task: "Pay bills" },
  { id: 7, task: "Read a book" },
  { id: 8, task: "Exercise" },
  { id: 9, task: "Cook dinner" },
  { id: 10, task: "Write blog post" },
];

function App() {
  const [tasks, setTasks] = useState(todos);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const deleteall = () => {
    setTasks([]);
  };
  const deletetask = (id) => {
    setTasks(
      tasks.filter((e) => {
        return e.id !== id;
      })
    );
  };
  const addTask = () => {
    if (task.trim() === "") return;
    if (editId) {
      setTasks(
        tasks.map((item) => {
          return item.id === editId ? { ...item, task } : item;
        })
      );
      setEditId(null);
    } else {
      setTasks([{ id: Date.now(), task }, ...tasks]);
    }

    setTask("");
  };

  const editTask = (id, text) => {
    setTask(text);
    setEditId(id);
  };
  return (
    <>
      <h2>todo list</h2>
      <div>
        <input
          type="text"
          placeholder="enter todo here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>{editId ? "update" : "add"}</button>
        <button onClick={deleteall}>delete all</button>
      </div>
      <hr />
      {tasks.map((e) => {
        return (
          <div key={e.id}>
            <h1>{e.task}</h1>
            <button onClick={() => deletetask(e.id)}>delete</button>
            <button onClick={() => editTask(e.id, e.task)}>edit</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
