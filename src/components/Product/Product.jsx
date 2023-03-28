import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="single-product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} starts</p>
      </div>
      <button className="btn-add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
