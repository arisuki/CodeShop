import { Link } from "react-router-dom"
import "./ShopListItem.css"

export default function ShopListItem({ shopItem }) {
    return (
        <div className="shop-list-item">
      
            <Link to={`/shop/items/${shopItem._id}`}> 
                <img src={shopItem.image} alt="" />
                <div>{shopItem.name}</div>
                </Link>
            <div>${shopItem.price}</div>
            <div>{shopItem.description}</div>

        </div>
    );
}