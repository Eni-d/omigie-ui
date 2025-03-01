import React from "react";
import { Link } from "react-router-dom";

const OrderRegistrationSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      <div 
        className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h1 className="text-2xl font-bold text-green-700">Order Successful!</h1>
        <p className="text-gray-700 mt-4">Your order has been successfully placed on our platform.</p>
        <div className="mt-6">
          <Link to="/">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700">
              Go to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderRegistrationSuccess;
