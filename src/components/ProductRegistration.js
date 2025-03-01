import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const ProductRegistration = () => {
  let navigate = useNavigate()
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let productData = product
    productData.companyName = sessionStorage.getItem("companyName")
    console.log("Product Registered:", productData);
    fetch("/registerProduct", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json, text/plain, */*"
      },
      body: JSON.stringify(productData)
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      sessionStorage.setItem("password", data.user.password)
      sessionStorage.setItem("companyName", data.user.companyName)
      navigate("/product-registration-success")
    })
    .catch(err => console.log(err))
  };

  if(sessionStorage.getItem("companyName") !== null) {
    console.log(sessionStorage.getItem("companyName"))
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <div className="w-full max-w-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={product.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={product.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={product.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={product.image}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700">
                Register Product
              </button>
            </form>
          </div>
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

export default ProductRegistration;
