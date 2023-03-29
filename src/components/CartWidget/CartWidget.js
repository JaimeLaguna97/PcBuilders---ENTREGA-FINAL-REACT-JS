import cart from './assets/logo.svg'



const CartWidget = () => {
    return (
        <div>
            <img className='cart-svg' src ={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget;