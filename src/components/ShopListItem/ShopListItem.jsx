import { Link } from "react-router-dom"

export default function ShopListItem({ shopItem, handleAddToOrder}) {
    return (
        <div className="shop-list-item">
      
            <Link to={`/shop/items/${shopItem._id}`}> 
                <img className="shop-list-image"src={shopItem.image} alt="" />
                <div>{shopItem.name}</div>
                </Link>
            <div>${shopItem.price}</div>
            <button onClick={()=> handleAddToOrder(shopItem._id)}>add to cart</button>

        </div>
    );
}