
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";


const Product = () => {
    return (
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
      
       
      {
        //using items and index.
         /*  ProductData.map((items,index)=>{
            return(
                <ProductCard id={index} product_image={items.product_image} product_title={items.product_title} product_rating={items.product_rating} product_price={items.product_price}  />
            )

           })*/
      //using unique id generator
      ProductData.map((items)=>{
        return(
            <ProductCard id={uniqid()} product_image={items.product_image} product_title={items.product_title} product_rating={items.product_rating} product_price={items.product_price}  />
        )
            
       })

       }
       

          
         
        </div>
      </div>
    );
  };
