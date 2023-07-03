export default function CartItem({ cartItem, isPaid, handleChangeQty }) {

    return (
        <div className="cart-items">

            <img className="cart-img" src={cartItem.item.image} alt="" />
            <div>{cartItem.item.name}</div>
            <div>${cartItem.item.price.toFixed(2)}</div>
            <div className="qty-buttons">
            <div>
                {!isPaid &&
                    <button onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty -1)}>-</button>
                }
            </div>
            <span>qty: {cartItem.qty}</span>
            <div>
                {!isPaid &&
                    <button onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty +1)}>+</button>
                }
            </div>
            </div>
        </div>
    );
}