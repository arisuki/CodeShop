import CartDetail from "../../components/CartDetail/CartDetail";
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';

export default function OrderHistoryPage({ user }) {
    const [orders, setOrders] = useState([]);
    
    useEffect(function() {
        async function getOrders() {
            const orders = await ordersAPI.getAllForUser();
            setOrders(orders);
        }
        getOrders();
    }, []);

console.log(orders, 'orders')
    return (
        <>
        <h1>Order List Component that lists all previous items</h1>
         {/* <CartDetail /> */}
        {/* // orders={orders} */}
        </>
    );
}
