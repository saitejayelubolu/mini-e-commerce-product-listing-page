import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <CartProvider>
      <GlobalStyles />
      <ProductList />
      <Cart />
    </CartProvider>
  );
};

export default App;
