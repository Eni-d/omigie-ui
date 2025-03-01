import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const CompanyRegistration = () => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company Registered", formData);
    fetch("/register", {
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
      navigate("/company-registration-success")
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Company Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Company Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Company Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Company Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Register Company
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/company-login" className="text-blue-500">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default CompanyRegistration;
