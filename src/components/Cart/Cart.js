import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="CartEmpty">
        <h1>CART EMPTY</h1>
        <Link to="/" className="OptionEmpty">
          PRODUCTS
        </Link>
        <>
        <div>
          <img src="https://i.ibb.co/Wg7sFdz/sad-face-2691.png" alt="sad-face"></img>
        </div>
        </>
      </div>
    );
  }

  return (
    <div>
      <CartWidget />
      {cart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          quantity={item.quantity}
          link={item.link}
        />
      ))}
      <h3>Total: ${total}</h3>
      <div className="CartCheckout">
        <button onClick={() => clearCart()} className="ButtonCart">
          CLEAR CART
        </button>
        <Link to="/checkout" className="OptionCart">
          CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default Cart;