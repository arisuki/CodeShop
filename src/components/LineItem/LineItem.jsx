export default function LineItem({ lineItem, isPaid }) {
    return (
        <div>
            <div>{lineItem.item}</div>

            <div>{lineItem.item.name}</div>
            <span>{lineItem.item.price.toFixed(2)}</span>
            <div className="line-item-qty">
                {!isPaid &&
                    <button onClick=""></button>
                }
            </div>
            <div className="line-item-qty">
                {!isPaid &&
                    <button onClick=""></button>
                }
            </div>
            <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
        </div>
    );
}