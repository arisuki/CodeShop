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
  // console.log("this is user in App", user);
  const [shopItems, setShopItems] = useState([])
  const categoriesRef = useRef([])

  useEffect(() =>{
    async function getItems() {
        const items = await itemsAPI.getAll();
        categoriesRef.current = [...new Set(items.map(item => item.category.name))];
        setShopItems(items);
    }      getItems()


  }, [])

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route exact path="/" element={<Shop shopItems={shopItems} categories={categoriesRef.current} />} />
            <Route
              path="/shop/items/:id"
              element={<ShopListItemShow shopItems={shopItems} />}
            />
            {/* <Route path = "/orders" element={<ShopListItemShow shopItems={shopItems} />}/> */}
            <Route 
            path = "/shop" 
            element={<Shop shopItems={shopItems} categories={categoriesRef.current}  />}/>

          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
