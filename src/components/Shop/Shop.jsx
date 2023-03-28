import "./Shop.css";
import React, { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="product-container">
        <h2>See all product: {products.length}</h2>
      </div>
      <div className="cart-container">
        <h2>Cart area</h2>
      </div>
    </div>
  );
};

export default Shop;
