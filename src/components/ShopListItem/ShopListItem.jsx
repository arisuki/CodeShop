import { Link } from "react-router-dom"
import ShopListItemShow from "../ShopListItemShow/ShopListItemShow"
import "./ShopListItem.css"

export default function ShopListItem({ shopItem }) {
    return (
        <div className="shop-list-item">
            <Link to{`/items/${shopItem._id}`} >    </Link>
                <img src={shopItem.image} alt="" />
                <div>{shopItem.name}</div>
           
            <div>${shopItem.price}</div>
            <div>{shopItem.description}</div>

        </div>
    );
}