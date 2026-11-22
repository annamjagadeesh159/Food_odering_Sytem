import { useState } from "react";
import Navbar from "./components/Navbar";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import "./App.css";

function App() {
  // ---------- STATE ----------
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home"); // temporary: Day 3 replaces this with React Router

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

  // ---------- DERIVED VALUES ----------
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // ---------- WHICH PAGE TO SHOW ----------
  let content;
  if (page === "home") {
    content = <Home onAdd={addToCart} onNavigate={setPage} />;
  } else if (page === "menu") {
    content = <Menu onAdd={addToCart} />;
  } else if (page === "about") {
    content = <About />;
  } else if (page === "cart") {
    content = (
      <CartPage
        items={cart}
        total={totalPrice}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
        onRemove={removeFromCart}
        onClear={clearCart}
        onNavigate={setPage}
      />
    );
  }

  // ---------- UI ----------
  return (
    <PageLayout
      navbar={
        <Navbar
          cartCount={totalItems}
          currentPage={page}
          onNavigate={setPage}
        />
      }
    >
      {content}
    </PageLayout>
  );
}

export default App;