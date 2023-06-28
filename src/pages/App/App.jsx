import "./App.css";
import * as itemsAPI from "../../utilities/items-api"
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Shop from "../Shop/Shop";
import ShopListItemShow from "../../components/ShopList/ShopList";
// import { getUser } from "../../utilities/users-service"
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';


export default function App() {
  const [user, setUser] = useState("Alice"); //getUser()
  console.log("this is user in App", user);
  const [shopItems, setShopItems] = useState([])


  useEffect(() =>{
    getItems()
}, [])

    async function getItems() {
        const items = await itemsAPI.getAll();
        // categoriesRef.current = [...new Set(items.map(item => item.category.name))];
        // console.log("current categories", categoriesRef.current)
        setShopItems(items);
    }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Shop shopItems={shopItems} />} />
            <Route path="/shop" element={<Shop shopItems={shopItems}/>} />
            <Route
              path="/shop/items/:id"
              element={<ShopListItemShow shopItems={shopItems} />}
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
