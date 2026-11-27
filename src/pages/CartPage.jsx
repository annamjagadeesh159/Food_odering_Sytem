import Cart from "../components/Cart";
import "./CartPage.css";

function CartPage(props) {
  return (
    <div className="container cart-page">
      <h1 className="page-title">Your Cart</h1>
      <Cart {...props} />
    </div>
  );
}

export default CartPage;