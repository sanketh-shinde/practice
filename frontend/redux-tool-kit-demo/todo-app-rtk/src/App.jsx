import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import TaskForm from "./features/tasks/TaskForm";
import TaskList from "./features/tasks/TaskList";

function App() {
  return (
    <Provider store={store}>
      <TaskForm />
      <TaskList />
    </Provider>
  );
}

export default App;
