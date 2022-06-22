import "./styles/App.css";
import { Route, Switch } from "react-router-dom";
import AllProductsPage from "./components/AllProductsPage";
import About from "./components/About";
import Header from "./components/Header";
import ProductDescription from "./components/ProductDescription";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/product" component={AllProductsPage} exact/>
        <Route path="/product/:productId" component={ProductDescription} exact />
        <Route path="/addProduct" component={AddProduct} exact />
      </Switch>
    </>
  );
}

export default App;
