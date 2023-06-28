import ShopList from "../../components/ShopList/ShopList";
import CategoryList from "../../components/CategoryList/CategoryList";
import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import OrderDetail from "../../components/OrderDetail/OrderDetail";

export default function Shop({ shopItems, categories, cart, setCart}) {
    async function handleAddToOrder(itemId) {
        // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
        const updatedCart = await ordersAPI.addItemToCart(itemId);
        // 2. Update the cart state with the updated cart received from the server
        setCart(updatedCart);
      }

  return (
    <>
      <h3>
        <CategoryList categories={categories} />
      </h3>
      <div>
        {shopItems.length ? (
          <ShopList shopItems={shopItems} handleAddToOrder={handleAddToOrder} />
        ) : (
          <div>loading...</div>
        )}
      </div>
      <div className="item-list"></div>
      <OrderDetail
        order={cart}
      />
    </>
  );
}
