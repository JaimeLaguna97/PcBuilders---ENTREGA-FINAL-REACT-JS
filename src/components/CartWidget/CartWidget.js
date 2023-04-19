import cart from './assets/logo.svg'



const CartWidget = () => {
    return (
        <div className='cart'>
            <img className='cart-svg' src ={cart} alt="cart-widget"/>
        </div>
    )
}

export default CartWidget;