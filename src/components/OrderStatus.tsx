import React, { useState, useEffect } from 'react';

interface Order {
  order_id: number;
  total: number;
  status: string;
  create_at: string;
}

const OrderStatus: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // TODO: Fetch user's orders from the server
    const dummyOrders: Order[] = [
      { order_id: 1, total: 25.98, status: 'Pending', create_at: '2023-04-10T12:00:00Z' },
      { order_id: 2, total: 15.99, status: 'Preparing', create_at: '2023-04-09T14:30:00Z' },
      { order_id: 3, total: 32.97, status: 'Delivered', create_at: '2023-04-08T18:45:00Z' },
    ];
    setOrders(dummyOrders);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Order Status</h2>
      {orders.length === 0 ? (
        <p>You have no orders.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Order ID</th>
              <th className="border p-2 text-left">Total</th>
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_id}>
                <td className="border p-2">{order.order_id}</td>
                <td className="border p-2">${order.total.toFixed(2)}</td>
                <td className="border p-2">{order.status}</td>
                <td className="border p-2">{new Date(order.create_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderStatus;