import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-medium mb-2">Online Goods Advert & Order System</h1>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/company-login" className="text-white hover:text-gray-300">Company Login</Link>
          <Link to="/company-registration" className="text-white hover:text-gray-300">Comany Registration</Link>
        </div>
        
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-700 py-4 space-y-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/company-login" className="text-white hover:text-gray-300">Company Login</Link>
          <Link to="/company-registration" className="text-white hover:text-gray-300">Comany Registration</Link>
        </div>
      )}
    </nav>
  );
}
