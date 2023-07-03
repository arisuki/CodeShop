import ShopListItem from "../ShopListItem/ShopListItem";


export default function ShopList({ shopItems, handleAddToOrder }) {
    const ShopListJsx = shopItems.map((item) =>
        <ShopListItem
            shopItem={item} key={item._id} handleAddToOrder={handleAddToOrder}/>
    )


    return (
        <div className="shop-list-wrapper">
        <div className="shop-list">
                      {ShopListJsx}
        </div>
        </div>
    )
}