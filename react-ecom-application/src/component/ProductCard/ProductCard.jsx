
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";



const ProductCard = (props) => {
    return (
      <div className="flex flex-col items-start justify-center px-5 py-2 gap-2">
        <img
          src={props.product_image}
        alt="" className="h-56 py-5"/>
        <p>{props.product_title}</p>
        <p>Rating: {props.product_rating}</p>
        <p>Price: {props.product_price}</p>
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Buy Now
        </button>
      </div>
    );
  };