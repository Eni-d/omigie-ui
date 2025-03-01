import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(()=> {
    if(sessionStorage.getItem("companyName") !== null) {
        console.log(sessionStorage.getItem("companyName"))
    }
  })
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <main className="flex flex-col items-center text-center mt-10 mb-10">
          <h2 
            className="text-4xl font-extrabold text-gray-800 mb-4"
          >
            Advertise & Order Goods Seamlessly
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Our platform allows businesses to register, list their products, and manage orders efficiently. Start today and expand your market reach.
          </p>
          <div className="mt-6 flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0 space-y-5">
            <Link to="/product-registration">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 w-full">
                Register Your Product
              </button>
            </Link>
            <Link to="/product-browsing">
              <button className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 w-full">
                Browse Products
              </button>
            </Link>
            <Link to="/goods-order-form">
              <button className="bg-yellow-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-800 w-full">
                Order
              </button>
            </Link>
          </div>
        </main>
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-12">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Company Registration</h3>
              <p className="text-gray-600 mt-2">Sign up your business and start listing products.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Browse Products</h3>
              <p className="text-gray-600 mt-2">Explore a wide range of advertised goods.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Order Management</h3>
              <p className="text-gray-600 mt-2">Place orders and manage transactions easily.</p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-row  justify-between items-center space-x-2">
              <Link to="/newsletter-form">
                  <button className="bg-blue-700 hover:bg-blue-800 hover:cursor-pointer text-white rounded-lg p-3">
                      <span className="mr-2">Newsletter Form</span>
                      <i class="las la-arrow-circle-right"></i>
                  </button>
              </Link>
              <Link to="/orders">
                  <button className="bg-green-700 hover:bg-green-800 hover:cursor-pointer text-white rounded-lg p-3">
                      <span className="mr-2">Awaiting Orders</span>
                      <i class="las la-arrow-circle-right"></i>
                  </button>
              </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
