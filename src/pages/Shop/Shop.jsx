import ShopList from "../../components/ShopList/ShopList";
import CategoryList from "../../components/CategoryList/CategoryList";
import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import CartDetail from "../../components/CartDetail/CartDetail";
import { useNavigate } from 'react-router-dom';

export default function Shop({ shopItems, categories}) {
    const [cart, setCart] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() =>{
    async function gettingCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      }      gettingCart()
    }, [])

    async function handleAddToOrder(itemId) {
        const updatedCart = await ordersAPI.addItemToCart(itemId);
        console.log("added item to cart", itemId);
        setCart(updatedCart);
        console.log("updated cart", updatedCart);
      }

    async function handleChangeQty(itemId, newQty) {
      const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
      setCart(updatedCart)
    }

    async function handleCheckout() {
      await ordersAPI.checkout();
      navigate('/orders');
    }

  return (
    <>
      <h3>
        <CategoryList categories={categories} />
      </h3>
      <div>
        {shopItems.length ? (
          <ShopList shopItems={shopItems} 
          handleAddToOrder={handleAddToOrder} 
          cart = {cart}
          setCart={setCart}
        
          />
        ) : (
          <div>loading...</div>
        )}
      </div>
      <div className="item-list"></div>
      {cart ? (
        <CartDetail
        order={cart}  
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout} />
      ) : (
        <div>Add items to cart</div>
      )}
        
      

    </>
  );
}
