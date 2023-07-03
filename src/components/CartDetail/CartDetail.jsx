import CartItem from "../CartItem/CartItem";


export default function CartDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return ("no order found");
console.log({order})
    const cartItems = order.cartItems.map(item => 
        <CartItem
        className="cart-item"
        cartItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
        />
    )

    return (
        <div className="cart-detail">
            {order.isPaid ? <span>Order #: {order._id}</span> 
            : null
            }
                  
            <span>{cartItems}</span> 
            {order.isPaid ? null :
            <button onClick={handleCheckout}
                    >Check out</button> } 
                   <h5>Subtotal: ${order.orderTotal.toFixed(2)} </h5> 
        </div>
    )
}