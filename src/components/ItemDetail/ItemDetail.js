import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
                Precio: ${price}
            </p>
        </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada' ,quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;