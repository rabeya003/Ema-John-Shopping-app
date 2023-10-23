import "./App.css";
import Hedaer from "./Component/Header/Hedaer";
import Product from "./Component/Product/Product";
import Shop from "./Component/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Hedaer></Hedaer>
      <Shop></Shop>
      <Product></Product>
    </div>
  );
}

export default App;
