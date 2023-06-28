import ShopList from "../../components/ShopList/ShopList";
import CategoryList from "../../components/CategoryList/CategoryList";
import { useRef } from 'react';

export default function Shop({shopItems}) {

const categoriesRef = useRef([])

    return (
        <>
            <h3>
                <CategoryList categories={categoriesRef.current}/>
            </h3>
            <div>
            {shopItems.length ? (
                <ShopList shopItems={shopItems}/>
                )
: (
    <div>
        loading...
    </div>
    )

            }
            </div>
            <div className="item-list"></div>
        </>
    )
}