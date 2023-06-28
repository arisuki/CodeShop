import ShopListItem from "../ShopListItem/ShopListItem";


export default function ShopList({ shopItems, handleAddToOrder }) {
    const ShopListJsx = shopItems.map((item) =>
        <ShopListItem
            shopItem={item} key={item._id} handleAddToOrder={handleAddToOrder}/>
    )


    return (
        <>
                      {ShopListJsx}
        </>
    )
}