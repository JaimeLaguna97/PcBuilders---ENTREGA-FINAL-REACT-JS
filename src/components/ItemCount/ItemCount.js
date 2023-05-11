import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAddClick = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubtractClick = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCartClick = () => {
    onAdd(count);
    setCount(initial);
  };

  return (
    <div className="Counter">
        <button className="Button" onClick={handleSubtractClick}>
          -
        </button>
        <span className="Number">{count}</span>
        <button className="Button" onClick={handleAddClick}>
          +
        </button>
        <button className="Button" onClick={handleAddToCartClick}>
          Add to Cart
        </button>
    </div>

  );
};

export default ItemCount;