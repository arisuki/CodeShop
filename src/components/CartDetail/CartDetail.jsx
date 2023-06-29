import CartItem from "../CartItem/CartItem";


export default function CartDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return ("no order found");
console.log({order})
    const cartItems = order.cartItems.map(item => 
        <CartItem
        cartItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
        />
    )

    console.log("cartItems in orderDetail", {cartItems})

    return (
        <div className="cart-detail">
        <p >
            <h3>ITEMS IN CURRENT ORDER </h3>

        </p>
           
            <span>{cartItems}</span> 
            <button onclick={handleCheckout}
                    >Check out</button> 
        </div>
    )
}