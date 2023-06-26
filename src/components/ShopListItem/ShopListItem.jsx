import { Link } from "react-router-dom"
import "./ShopListItem.css"

export default function ShopListItem({ item }) {
    return (
        <div className="shop-list-item">
            <a href={item.link}>
                <img src={item.image} alt="" />
                <div>{item.name}</div>
            </a>
            <div>${item.price}</div>
            <div>{item.description}</div>

        </div>
    );
}