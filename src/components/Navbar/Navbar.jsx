import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          impler
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Products
          </Link>
          <Link to="/cart" className="text-gray-300 hover:text-white">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
