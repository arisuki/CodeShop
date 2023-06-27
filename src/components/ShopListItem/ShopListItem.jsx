import { Link } from "react-router-dom"
import "./ShopListItem.css"

export default function ShopListItem({ shopItem }) {
    return (
        <div className="shop-list-item">
            <a href={shopItem.link}>
                <img src={shopItem.image} alt="" />
                <div>{shopItem.name}</div>
            </a>
            <div>${shopItem.price}</div>
            <div>{shopItem.description}</div>

        </div>
    );
}