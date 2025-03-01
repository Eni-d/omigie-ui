import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductBrowsing = () => {
  const [products, setProducts] = useState([]);
  fetch("/api/getProducts")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    setProducts([...data.products])
  })
  .catch(err => console.log(err))

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Browse Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="p-4 shadow-lg rounded-lg bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">N{product.price}</p>
              <p className="text-gray-600 mb-2">Company: {product.companyName}</p>
              <br />
              <Link to="/goods-order-form">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 w-full">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBrowsing;
