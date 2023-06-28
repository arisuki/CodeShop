export default function CartItem({ cartItem, isPaid }) {
    console.log("cartItem in cartItem", cartItem)
    return (
        <div>
            {/* Cart item
            <div>{cartItem.item}</div>

            <div>{cartItem.item.name}</div>
            <span>{cartItem.item.price.toFixed(2)}</span>
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
            <div>${cartItem.extPrice.toFixed(2)}</div> */}
        </div>
    );
}