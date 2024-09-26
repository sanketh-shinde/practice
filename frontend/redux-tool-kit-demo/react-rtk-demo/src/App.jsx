import { Provider } from "react-redux";

import store from "./app/store";

import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <Provider store={store}>
      <CakeView />
      <IcecreamView />
      <UserView />
    </Provider>
  );
}

export default App;
