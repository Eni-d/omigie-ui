import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CompanyRegistration from "./components/CompanyRegistration";
import ProductRegistration from "./components/ProductRegistration";
import CompanyLogin from "./components/CompanyLogin";
import CompanyOrderRequest from "./components/CompanyOrderRequest";
import ProductBrowsing from "./components/ProductBrowsing";
import GoodsOrderForm from "./components/GoodsOrderForm";
import NewsLetterForm from "./components/NewsLetterForm";
import CompanyRegistrationSuccess from "./components/CompanyRegistrationSuccess";
import ProductRegistrationSuccess from "./components/ProductRegistrationSuccess";
import OrderRegistrationSuccess from "./components/OrderRegistrationSuccess";
import Orders from "./components/Orders";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company-registration" element={<CompanyRegistration />} />
          <Route path="/product-registration" element={<ProductRegistration />} />
          <Route path="/company-login" element={<CompanyLogin />} />
          <Route path="/company-order-request" element={<CompanyOrderRequest />} />
          <Route path="/product-browsing" element={<ProductBrowsing />} />
          <Route path="/goods-order-form" element={<GoodsOrderForm />} />
          <Route path="/newsletter-form" element={<NewsLetterForm />} />
          <Route path="/company-registration-success" element={<CompanyRegistrationSuccess />} />
          <Route path="/product-registration-success" element={<ProductRegistrationSuccess />} />
          <Route path="/order-registration-success" element={<OrderRegistrationSuccess />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
    
  );
};

export default App;
