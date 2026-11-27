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
import { calcBill, COUPONS } from "./utils/pricing";
import "./App.css";

function App() {
  // ---------- STATE ----------
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [user, setUser] = useState(null); // TEMPORARY: Day 5 uses Context, Day 14 uses real login

  // ---------- CART ACTIONS ----------
  // options is optional: { size, extras, unitPrice, qty }  (the Food details page sends it)
  function addToCart(food, options = {}) {
    const { size = "Regular", extras = [], unitPrice = food.price, qty = 1 } = options;
    const variant = [size, ...extras].join(", ");
    const key = `${food.id}-${variant}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.key === key);

      if (existing) {
        return prev.map((item) =>
          item.key === key ? { ...item, qty: item.qty + qty } : item
        );
      }

      return [
        ...prev,
        {
          key,
          id: food.id,
          name: food.name,
          image: food.image,
          variant,
          price: unitPrice,
          qty,
        },
      ];
    });
  }

  function increaseQty(key) {
    setCart((prev) =>
      prev.map((item) => (item.key === key ? { ...item, qty: item.qty + 1 } : item))
    );
  }

  function decreaseQty(key) {
    setCart((prev) =>
      prev
        .map((item) => (item.key === key ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  }

  function removeFromCart(key) {
    setCart((prev) => prev.filter((item) => item.key !== key));
  }

  function clearCart() {
    setCart([]);
    setCoupon("");
  }

  // ---------- COUPON ----------
  function applyCoupon(code) {
    const key = code.trim().toUpperCase();
    if (COUPONS[key]) {
      setCoupon(key);
      return true;
    }
    return false;
  }

  function removeCoupon() {
    setCoupon("");
  }

  // ---------- AUTH (temporary) ----------
  function login(userData) {
    setUser(userData);
  }

  function logout() {
    setUser(null);
  }

  // ---------- DERIVED VALUES ----------
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const bill = calcBill(cart, coupon);

  // ---------- ROUTES ----------
  return (
    <Routes>
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
              bill={bill}
              coupon={coupon}
              onApplyCoupon={applyCoupon}
              onRemoveCoupon={removeCoupon}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
              onRemove={removeFromCart}
              onClear={clearCart}
            />
          }
        />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute user={user} />}>
          <Route
            path="/checkout"
            element={<Checkout items={cart} total={bill.total} onPlaceOrder={clearCart} />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<ProtectedRoute user={user} role="admin" />}>
        <Route element={<AdminLayout onLogout={logout} />}>
          <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;