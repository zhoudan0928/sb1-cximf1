import React, { useState, useEffect } from 'react';

interface MenuItem {
  menu_id: number;
  name: string;
  price: number;
  category: string;
}

interface OrderItem extends MenuItem {
  quantity: number;
}

const Order: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    // TODO: Fetch menu items from the server
    const dummyMenuItems: MenuItem[] = [
      { menu_id: 1, name: 'Burger', price: 10.99, category: 'Food' },
      { menu_id: 2, name: 'Pizza', price: 12.99, category: 'Food' },
      { menu_id: 3, name: 'Salad', price: 8.99, category: 'Food' },
      { menu_id: 4, name: 'Soda', price: 2.99, category: 'Drink' },
    ];
    setMenuItems(dummyMenuItems);
  }, []);

  const addToOrder = (item: MenuItem) => {
    const existingItem = orderItems.find((orderItem) => orderItem.menu_id === item.menu_id);
    if (existingItem) {
      setOrderItems(orderItems.map((orderItem) =>
        orderItem.menu_id === item.menu_id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      ));
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromOrder = (item: OrderItem) => {
    if (item.quantity > 1) {
      setOrderItems(orderItems.map((orderItem) =>
        orderItem.menu_id === item.menu_id
          ? { ...orderItem, quantity: orderItem.quantity - 1 }
          : orderItem
      ));
    } else {
      setOrderItems(orderItems.filter((orderItem) => orderItem.menu_id !== item.menu_id));
    }
  };

  const totalPrice = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const placeOrder = () => {
    // TODO: Implement order placement logic
    console.log('Placing order:', orderItems);
    alert('Order placed successfully!');
    setOrderItems([]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.menu_id} className="flex justify-between items-center mb-4">
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button
                onClick={() => addToOrder(item)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Order
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Your Order</h2>
        {orderItems.length === 0 ? (
          <p>Your order is empty.</p>
        ) : (
          <>
            <ul className="mb-4">
              {orderItems.map((item) => (
                <li key={item.menu_id} className="flex justify-between items-center mb-2">
                  <span>{item.name} x {item.quantity}</span>
                  <div>
                    <span className="mr-4">${(item.price * item.quantity).toFixed(2)}</span>
                    <button
                      onClick={() => removeFromOrder(item)}
                      className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={placeOrder}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Order;