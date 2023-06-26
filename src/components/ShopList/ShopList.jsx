import ShopListItem from "../ShopListItem/ShopListItem";

export default function ShopList({ items }) {
    const ShopListJsx = items.map((item, idx) =>
        <ShopListItem
            item={item} key={idx} />
    )
    return (
        <>
            {/* <div>will map through each menu list item</div> */}
            {ShopListJsx}
        </>
    )
}