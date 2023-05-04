import './ItemDetail.css';
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContex';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity);
    }
    
    return(
        <article className="CardItemDetail">
            <header className="HeaderDetail">
                <h2 className="ItemHeaderDetail">
                    {name}
                </h2>
            </header>
        
        <section>
        <picture>
            <img className='ItemImg' src={img}  alt={name}/>        
        </picture>
            <p className="Info"> 
                Category: {category}
            </p>
            <p className="Info">
                Description: {description}
            </p>
            <p className="Info">
                Price: ${price}
            </p>
        </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <div className='CartButton'>
                            <Link to='/cart' className='Option'>BUY</Link> 
                        </div>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;