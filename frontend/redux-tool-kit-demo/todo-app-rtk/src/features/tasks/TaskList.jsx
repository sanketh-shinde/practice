import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "./taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.task);

  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => dispatch(removeTask(task.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
