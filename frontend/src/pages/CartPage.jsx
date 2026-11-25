import Cart from "../components/Cart";
import "./CartPage.css";

function CartPage(props) {
  return (
    <div className="container cart-page">
      <p className="eyebrow">Your order</p>
      <h1>Cart</h1>
      <Cart {...props} />
    </div>
  );
}

export default CartPage;