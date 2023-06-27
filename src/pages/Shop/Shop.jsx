import ShopList from "../../components/ShopList/ShopList";
import * as itemsAPI from "../../utilities/items-apis"
import { useState, useEffect, useRef } from 'react';

export default function Shop() {

const [shopItems, setShopItems] = useState([])

    useEffect(() =>{
        console.log("use effect will get items")
        getItems()
        console.log("use effect called getItems()")
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
            <div>
            {shopItems.length ? (
                <ShopList shopItems={shopItems}/>
                )
: (
    <div>
        no items available
    </div>
    )

            }
            </div>
            <div className="item-list"></div>
        </>
    )
}