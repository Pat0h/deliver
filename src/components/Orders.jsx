import React from 'react';

const Orders = () => {
  const orders = [
    { id: 1, orderNumber: 'ORD123', status: 'Delivered' },
    { id: 2, orderNumber: 'ORD456', status: 'In Transit' },
    
  ];

  return (
    <div className="orders">
      <h1>Orders</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.orderNumber}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
