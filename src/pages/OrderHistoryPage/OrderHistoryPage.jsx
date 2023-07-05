import CartDetail from "../../components/CartDetail/CartDetail";
import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";

export default function OrderHistoryPage({ user }) {
  const [orders, setOrders] = useState([]);

  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setOrders(orders);
    }
    getOrders();
  }, []);
  const paidOrders = orders.map((order) => (
    <>
      <CartDetail order={order} />
      <hr />
    </>
  ));

  return (
    <>
      <h1>Previous Orders</h1>
      {paidOrders}
    </>
  );
}
