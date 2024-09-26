import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import { store } from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      {/* <CakeContainer /> */}
      <HooksCakeContainer />
      <Counter />
    </Provider>
  );
}

export default App;
