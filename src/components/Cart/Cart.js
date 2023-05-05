import './Cart.css';
import { useContext } from "react";
import { CartContext } from '../context/CartContext';
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext);

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>CART EMPTY</h1>
                <Link to='/' className='Option'>PRODUCTS</Link>
            </div>
        )
    }
    
    return (
        <div>
            <CartWidget />
            { cart.map(p => <CartItem key={p.id} {...p} img={p.img} link={p.link} />) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">CLEAR CART</button>
            <Link to='/checkout' className='Option'>CHECKOUT</Link>
        </div>
    )
}

export default Cart;