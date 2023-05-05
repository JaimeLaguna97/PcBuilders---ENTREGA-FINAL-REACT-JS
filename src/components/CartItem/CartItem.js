import './CartItem.css';

const CartItem = ({ id, name, price, quantity, img }) => {
  console.log(img);
  return (
    <div className='CartItem'>
      <img className='CartItem-image' src={img} alt={name} />
      <div className='CartItem-details'>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
}

export default CartItem;

