import React, { useState, useEffect } from 'react';

interface MenuItem {
  menu_id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    // TODO: Fetch menu items from the server
    const dummyMenuItems: MenuItem[] = [
      { menu_id: 1, name: 'Burger', price: 10.99, category: 'Food', image: 'https://source.unsplash.com/random/300x200?burger' },
      { menu_id: 2, name: 'Pizza', price: 12.99, category: 'Food', image: 'https://source.unsplash.com/random/300x200?pizza' },
      { menu_id: 3, name: 'Salad', price: 8.99, category: 'Food', image: 'https://source.unsplash.com/random/300x200?salad' },
      { menu_id: 4, name: 'Soda', price: 2.99, category: 'Drink', image: 'https://source.unsplash.com/random/300x200?soda' },
    ];
    setMenuItems(dummyMenuItems);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.menu_id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.category}</p>
              <p className="text-blue-600 font-bold">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;