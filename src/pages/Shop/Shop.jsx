import { items } from "./ItemData";
import ShopList from "../../components/ShopList/ShopList";

export default function Shop() {
    return (
        <>
            <h1>Shop main page</h1>
            <div><ShopList items={items}/></div>
            <div className="item-list"></div>
        </>
    )
}