import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({id, name,img,price,stock}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
                <picture>
                    <img src={img} width={120} alt={name} className="ItemImg"/>
                </picture>
                <section>
                    <p className="Info">
                        Price: ${price}
                    </p>
                    <p className="Info">
                        Stock available: {stock}
                    </p>
                </section>
            </header>
            <footer className='ItemFooter'>             
                        <Link to={`/item/${id}`} className='OptionDetails'>See details</Link>
            </footer>
        </article>
    )
}

export default Item;