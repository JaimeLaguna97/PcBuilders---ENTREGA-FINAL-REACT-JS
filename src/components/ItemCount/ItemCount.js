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
    <div className="ItemCount">
      <button className="ItemCount-button" onClick={handleSubtractClick}>
        -
      </button>
      <span className="ItemCount-count">{count}</span>
      <button className="ItemCount-button" onClick={handleAddClick}>
        +
      </button>
      <button className="ItemCount-addToCart" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCount;