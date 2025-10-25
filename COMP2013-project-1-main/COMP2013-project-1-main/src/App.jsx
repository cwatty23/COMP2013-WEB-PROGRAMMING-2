import "./App.css";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import products from "./data/products.js";

function App() {
  return (
  <>
    <GroceriesAppContainer data={products} />
  </>
  );
}

export default App;
