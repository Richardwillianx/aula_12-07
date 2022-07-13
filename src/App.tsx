import { Provider } from "react-redux";
import { store } from "./store";
import Pai from "./components/Pai";

const App = () => {
  return (
    <Provider store={store}>
      <h1>App</h1>
      <Pai />
    </Provider>
  );
};

export default App;
