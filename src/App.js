import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { About } from "./Pages/About";
import Shop from "./components/shop/shop";
import Nav from "./components/nav/nav";
import Cart from "./cart/cart";
import { ShopContextProvider } from "./context/shopContext";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
