import { memo, useRef, useState } from "react";
import TodoDisplay from "./TodoDisplay";

import { Button, Stack, TextField } from "@mui/material";

import "../css/style.css";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeRef = useRef(null);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      if (darkModeRef.current)
        darkModeRef.current.innerText = "Enable dark mode";
    } else {
      document.body.style.backgroundColor = "#121212";
      if (darkModeRef.current)
        darkModeRef.current.innerText = "Disable dark mode";
    }

    setIsDarkMode(!isDarkMode);
  };

  const addTodo = () => {
    if (task.length > 0) {
      setTodo([...todo, task]);
      setTask("");
    } else {
      alert("Enter a Task to Add");
    }
  };

  const removeTodo = (index) => {
    let afterRemoving = todo.filter((_, i) => i !== index);
    setTodo(afterRemoving);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={toggleDarkMode}
        ref={darkModeRef}
        id="dark"
      >
        Enable dark mode
      </Button>
      <Stack
        spacing={2}
        direction="row"
        display="flex"
        justifyContent="center"
        marginBlock={2}
      >
        <TextField
          id="outlined-basic"
          label="Enter a Task"
          variant="outlined"
          size="small"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="outlined" color="success" onClick={addTodo} id="add">
          Add Todo
        </Button>
      </Stack>
      <TodoDisplay items={todo} handle={removeTodo} />
    </>
  );
};

export default memo(TodoInput);
