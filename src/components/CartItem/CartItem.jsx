export default function CartItem({ cartItem, isPaid }) {

    return (
        <div className="cart-items">

            <img className="cart-img" src={cartItem.item.image} alt="" />
            <div>{cartItem.item.name}</div>
            <div>{cartItem.item.price.toFixed(2)}</div>
            <div>{cartItem.totalPrice.toFixed(2)}</div>
            <div>
                {!isPaid &&
                    <button onClick=""></button>
                }
            </div>
            <div>
                {!isPaid &&
                    <button onClick=""></button>
                }
            </div>
        </div>
    );
}