import ShopListItem from "../ShopListItem/ShopListItem";

export default function ShopList({ shopItems, handleAddToOrder, user }) {
  const ShopListJsx = shopItems.map((item) => (
    <ShopListItem
      shopItem={item}
      user={user}
      key={item._id}
      handleAddToOrder={handleAddToOrder}
    />
  ));

  return (
    <div className="shop-list-wrapper">
      <div className="shop-list">{ShopListJsx}</div>
    </div>
  );
}
