import OrdersGrid from "./OrdersGrid";
import { useState } from "react";

const OrdersContainer = ({ orders }) => {
  const totalOrders = orders.length;
  console.log("OrdersContainer rendered with orders:", totalOrders);

  return (
    <>
      <div>
        <OrdersGrid orders={orders} />
      </div>
    </>
  );
};

export default OrdersContainer;
