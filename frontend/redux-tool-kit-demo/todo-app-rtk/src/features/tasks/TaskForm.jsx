import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addTask({ id: Date.now(), text: task }));
      alert("task added");
      setTask("");
    } else {
      alert("enter a task to add");
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TaskForm;
