import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const CompanyLogin = () => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company Registered", formData);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json, text/plain, */*"
      },
      body: JSON.stringify(formData)
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      sessionStorage.setItem("password", data.user.password)
      sessionStorage.setItem("companyName", data.user.companyName)
      navigate("/")
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Company Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/company-registration" className="text-blue-500">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default CompanyLogin;