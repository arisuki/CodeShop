import "./App.css";
import * as itemsAPI from "../../utilities/items-api"
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Shop from "../Shop/Shop";
import ShopListItemShow from "../../components/ShopListItemShow/ShopListItemShow";
import { getUser } from "../../utilities/users-service"
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [shopItems, setShopItems] = useState([])
  const [activeCategory, setActiveCategory] = useState(null);
  const categoriesRef = useRef([])

  
  useEffect(() =>{
    async function getItems() {
        const items = await itemsAPI.getAll();
        categoriesRef.current = [...new Set(items.map(item => item.category.name))];
        setShopItems(items);
        setActiveCategory(null);
    }      getItems()
  }, [])
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/*" element={<Shop shopItems={shopItems} categories={categoriesRef.current} activeCategory={activeCategory} setActiveCategory={setActiveCategory} user={user} />} />
            <Route
              path="/shop/items/:id"
              element={<ShopListItemShow shopItems={shopItems} />}
            />
            <Route path = "/orders" element={<OrderHistoryPage />}/> 
            
          </Routes>
        </>
      ) : (
        <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
        <Route path="/*" element={<Shop shopItems={shopItems} categories={categoriesRef.current} activeCategory={activeCategory} user={user} setActiveCategory={setActiveCategory} />} />
        <Route
          path="/shop/items/:id"
          element={<ShopListItemShow shopItems={shopItems} />}
        />
        <Route
          path="/shop/items/:id"
          element={<ShopListItemShow shopItems={shopItems} />}
        />
         <Route
          path="/users"
          element={<AuthPage setUser={setUser} />}
        />
      </Routes>
  
      </>
      )}
    </main>
  );
}
