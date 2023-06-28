import ShopListItem from "../ShopListItem/ShopListItem";


export default function ShopList({ shopItems }) {
    const ShopListJsx = shopItems.map((item, idx) =>
        <ShopListItem
            shopItem={item} key={idx} />
    )


    return (
        <>
                      {ShopListJsx}
        </>
    )
}