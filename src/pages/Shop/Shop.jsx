import ShopList from "../../components/ShopList/ShopList";
import CategoryList from "../../components/CategoryList/CategoryList";
import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import CartDetail from "../../components/CartDetail/CartDetail";
import { useNavigate } from 'react-router-dom';

export default function Shop({ shopItems, categories, activeCategory, setActiveCategory, user}) {
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
        <CategoryList categories={categories} 
        activeCategory={activeCategory} 
        setActiveCategory={ setActiveCategory} />
      </h3>
          
      <button class="cart-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><svg xmlns="http://www.w3.org/2000/svg" width="32  " height="32" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></button>

      <div>
        {shopItems.length ? (
          activeCategory ? 
          (<ShopList shopItems={shopItems.filter(item => item.category.name === activeCategory)} 
          handleAddToOrder={handleAddToOrder} 
          cart = {cart}
          user = {user}
          setCart={setCart}/>)
          : 
          (
            <ShopList shopItems={shopItems} 
            handleAddToOrder={handleAddToOrder} 
            cart = {cart}
            setCart={setCart}/>
          )
        ) : (
          <div>loading...</div>
        )}
      </div>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Shopping Cart</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  {cart ? (
        <CartDetail
        order={cart}  
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout} />
      ) : (
        <div>Add items to cart</div>
      )}
  </div>
</div>


     



      <h4>Sign up for our newsletter to receive 15% off on your first purchase</h4>
      <div>
        <form autoComplete="off">
            <label>Email</label>
            <input
              type="email"
              name="email"
            />
            <button type="submit">
              SIGN UP
            </button>
          </form>
      </div>
    </>
  );
}
