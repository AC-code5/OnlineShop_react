import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import Shop from "./components/shop/shop";
import Nav from "./components/nav/nav";
import Cart from "./cart/cart";
import { ShopContextProvider } from "./context/shopContext";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
