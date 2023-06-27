import ShopList from "../../components/ShopList/ShopList";
import * as itemsAPI from "../../utilities/items-apis"
import { useState, useEffect, useRef } from 'react';

export default function Shop({user, setUser}) {

const [shopItems, setShopItems] = useState([])

    useEffect(() =>{
        getItems()
    }, [])
        async function getItems() {
            const items = await itemsAPI.getAll();
            console.log("items in shop.jsx", items)
            // categoriesRef.current = [...new Set(items.map(item => item.category.name))];
            setShopItems(items);
        }


    return (
        <>
            <h1>Shop main page</h1>
            <div><ShopList items={shopItems}/></div>
            <div className="item-list"></div>
        </>
    )
}