import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CustomerLayout from "./layouts/CustomerLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/FoodDetails";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import "./App.css";

function App() {
  // ---------- STATE ----------
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); // null = logged out. TEMPORARY: Day 5 uses Context, Day 14 uses real login

  // ---------- CART ACTIONS ----------
  function addToCart(food) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === food.id);

      if (existing) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { id: food.id, name: food.name, price: food.price, qty: 1 }];
    });
  }

  function increaseQty(id) {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  }

  function decreaseQty(id) {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  // ---------- AUTH ACTIONS (temporary) ----------
  function login(userData) {
    setUser(userData);
  }

  function logout() {
    setUser(null);
  }

  // ---------- DERIVED VALUES ----------
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // ---------- ROUTES ----------
  return (
    <Routes>
      {/* Customer pages share Navbar + Footer through CustomerLayout */}
      <Route
        element={<CustomerLayout cartCount={totalItems} user={user} onLogout={logout} />}
      >
        <Route path="/" element={<Home onAdd={addToCart} />} />
        <Route path="/menu" element={<Menu onAdd={addToCart} />} />
        <Route path="/food/:id" element={<FoodDetails onAdd={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <CartPage
              items={cart}
              total={totalPrice}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
              onRemove={removeFromCart}
              onClear={clearCart}
            />
          }
        />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/register" element={<Register />} />

        {/* Pages that need a logged-in user */}
        <Route element={<ProtectedRoute user={user} />}>
          <Route
            path="/checkout"
            element={<Checkout items={cart} total={totalPrice} onPlaceOrder={clearCart} />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin pages: logged in AND role must be admin */}
      <Route element={<ProtectedRoute user={user} role="admin" />}>
        <Route element={<AdminLayout onLogout={logout} />}>
          <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;