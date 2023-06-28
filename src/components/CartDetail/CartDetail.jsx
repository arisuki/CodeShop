import CartItem from "../CartItem/CartItem";


export default function CartDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return ("no order found");
console.log({order})
    // const cartItems = order.cartItems.map(item => 
    //     <CartItem
    //     cartItem={item}
    //     isPaid={order.isPaid}
    //     handleChangeQty={handleChangeQty}
    //     key={item._id}    );/>
        

    // console.log("cartItems in orderDetail", {cartItems})

    return (
        <>
        ITEMS IN CURRENT ORDER 
            {/* <span>Order<span>{order.orderId}</span></span>
            <span>New Order</span>
            <span>{cartItems}</span> 
            <button onclick={handleCheckout}
                    >Check out</button> 
            <span>{order.totalQty}</span>
            <span>{order.orderTotal.toFixed(2)}</span> */}
        </>
    )
}