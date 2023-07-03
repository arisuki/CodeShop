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
            {order.isPaid ? 
            <><h3>Order #: {order._id}</h3><h5>{new Date(order.updatedAt).toLocaleDateString()}</h5>
            <span>{cartItems}</span> </>
            : 
            <>
            <span>{cartItems}</span> 
            <button onClick={handleCheckout}>Check out</button> 
                   <h5>Subtotal: ${order.orderTotal.toFixed(2)} </h5>
                   </> 
            }
                  
            
           
        </div>
    )
}