import React, { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
    fetch(`/api/getOrders/${sessionStorage.getItem("companyName")}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setOrders([...data.orders])
    })
    .catch(err => console.log(err))

  if(sessionStorage.getItem("companyName") !== null) {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
                Awaiting Orders
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {orders.map((order) => (
                <div className="p-4 shadow-lg rounded-lg bg-white">
                    <div>
                    <p className="text-gray-600 mb-2"><span className="font-medium text-blue-600">Customer Name:</span> {order.name}</p>
                    <p className="text-gray-600 mb-2"><span className="font-medium text-blue-600">Customer Email:</span> {order.email}</p>
                    <p className="text-gray-600 mb-2"><span className="font-medium text-blue-600">Product:</span> {order.product}</p>
                    <p className="text-gray-600 mb-2"><span className="font-medium text-blue-600">Quantity:</span> {order.quantity}</p>
                    <p className="text-gray-600 mb-2"><span className="font-medium text-blue-600">Customer Address:</span> {order.address}</p>
                    <p className="text-gray-600 mb-2"><span className="font-medium text-blue-600">Company Name:</span> {order.companyName}</p>
                    <br />
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
  } else {
    return (
      <div>
        <div className="mt-32 flex flex-col justify-center items-center">
          <h1 className="text-xl">Please <a href="/company-login" className="text-blue-500">Login</a> or <a href="/company-registration" className="text-blue-500">Register here</a></h1>
        </div>
      </div>
    )
  }
 
  
};

export default Orders;
