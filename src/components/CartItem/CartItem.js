import './CartItem.css';

const CartItem = ({ id, title, price, quantity, img }) => {
  console.log(img);
  return (
    <div className='CartItem'>
      <img className='CartItem-image' src={img} alt={title} />
      <div className='CartItem-details'>
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
}

export default CartItem;

