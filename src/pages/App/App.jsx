import "./App.css";
import * as itemsAPI from "../../utilities/items-api"
import * as ordersAPI from "../../utilities/orders-api";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Shop from "../Shop/Shop";
import ShopListItemShow from "../../components/ShopListItemShow/ShopListItemShow";
// import { getUser } from "../../utilities/users-service"
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState("Alice"); //getUser()
  console.log("this is user in App", user);
  const [shopItems, setShopItems] = useState([])
  const categoriesRef = useRef([])
  const [cart, setCart] = useState(null);


    async function getItems() {
        const items = await itemsAPI.getAll();
        categoriesRef.current = [...new Set(items.map(item => item.category.name))];
        setShopItems(items);
    }
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }

    useEffect(() =>{
      getItems()
      getCart()
  }, [])

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route exact path="/" element={<Shop shopItems={shopItems} categories={categoriesRef.current} cart={cart} setCart={setCart}/>} />
            <Route
              path="/shop/items/:id"
              element={<ShopListItemShow shopItems={shopItems} />}
            />
            {/* <Route path = "/orders" element={<ShopListItemShow shopItems={shopItems} />}/> */}
            <Route 
            path = "/orders/new" 
            element={<Shop shopItems={shopItems} categories={categoriesRef.current} cart={cart} setCart={setCart} />}

            />

            {/* <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} /> */}
            {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
