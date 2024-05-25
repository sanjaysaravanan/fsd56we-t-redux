import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./components/Counter";
import Movements from "./components/Movements";
import Products from "./Products/Products";

function App() {
  return (
    <Provider store={store}>
      {/* <h1>Sample Redux Application</h1> */}
      <Counter />
      <Movements />
      {/* <Products /> */}
    </Provider>
  );
}

export default App;
