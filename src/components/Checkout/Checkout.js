import { Timestamp, getDocs, writeBatch, collection, query, addDoc } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import './Checkout.css';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const productsRef = collection(db, "products");
      const products = await getDocs(query(productsRef));

      const orderRef = collection(db, "orders");
      const newOrder = await addDoc(orderRef, objOrder);

      cart.forEach((item) => {
        const product = products.docs.find((doc) => doc.id === item.id);
        if (product.data().stock >= item.quantity) {
          batch.update(product.ref, {
            stock: product.data().stock - item.quantity,
          });
        } else {
          outOfStock.push({ ...product.data(), id: product.id });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        clearCart();
        setOrderId(newOrder.id);
      } else {
        throw new Error(
          `The following items are out of stock: ${outOfStock
            .map((item) => item.title)
            .join(", ")}`
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2>CHECKOUT</h2>
          <CheckoutForm handleSubmit={createOrder} loading={loading} />
          {orderId && (
            <div className="alert" role="alert">
              Your order has been placed! Order ID: {orderId}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;