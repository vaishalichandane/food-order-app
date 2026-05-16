import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderStatus from "./pages/OrderStatus";

function App() {
  return (
    <div>
      <nav>
        <div className="logo">
          FoodExpress
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/order/:id"
          element={<OrderStatus />}
        />
      </Routes>
    </div>
  );
}

export default App;