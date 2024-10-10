import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, User, ShoppingCart, FileText, MessageSquare } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Restaurant App</Link>
        <nav>
          <ul className="flex space-x-4">
            {isLoggedIn ? (
              <>
                <li><Link to="/menu" className="flex items-center"><Menu className="mr-1" size={18} /> Menu</Link></li>
                <li><Link to="/order" className="flex items-center"><ShoppingCart className="mr-1" size={18} /> Order</Link></li>
                <li><Link to="/order-status" className="flex items-center"><FileText className="mr-1" size={18} /> Order Status</Link></li>
                <li><Link to="/feedback" className="flex items-center"><MessageSquare className="mr-1" size={18} /> Feedback</Link></li>
                <li><button onClick={handleLogout} className="flex items-center"><User className="mr-1" size={18} /> Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="flex items-center"><User className="mr-1" size={18} /> Login</Link></li>
                <li><Link to="/register" className="flex items-center"><User className="mr-1" size={18} /> Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;