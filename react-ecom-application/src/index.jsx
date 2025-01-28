import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import uniqid from 'uniqid';


//list of product data
const ProductData = [
    { 
        id:"1",
        product_image:"https://ik.imagekit.io/shivanim/ecom%20react/2-5kg-x-4-premium-quality-10-aman-fit-original-imahf75527svkq5m.webp?updatedAt=1737790836709",
        product_title:"dumbell 5kg lite",
        product_price:"₹1000",
        product_rating:"5000"
    },
    {
        id:"2",
        product_image:"https://ik.imagekit.io/shivanim/ecom%20react/2-5kg-x-4-premium-quality-10-aman-fit-original-imahf75527svkq5m.webp?updatedAt=1737790836709",
        product_title:"dumbell 5kg lite",
        product_price:"₹1000",
        product_rating:"5000"
    },
    {
        id:"3",
        product_image:"https://ik.imagekit.io/shivanim/ecom%20react/2-5kg-x-4-premium-quality-10-aman-fit-original-imahf75527svkq5m.webp?updatedAt=1737790836709",
        product_title:"dumbell 5kg lite",
        product_price:"₹1000",
        product_rating:"5000"
    },
    {
        id:"4",
        product_image:"https://ik.imagekit.io/shivanim/ecom%20react/2-5kg-x-4-premium-quality-10-aman-fit-original-imahf75527svkq5m.webp?updatedAt=1737790836709",
        product_title:"dumbell 5kg lite",
        product_price:"₹1000",
        product_rating:"5000"
    }
    
]
// Header Component (if needed)
const Header = <h1 className="bg-black text-white">Hello</h1>;

// HeroSection Component
const HeroSection = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="py-5 flex flex-row justify-center items-center">
          <img
            src="https://ik.imagekit.io/shivanim/iphone%2016.jpeg?updatedAt=1737789334580"
            alt="iPhone 16 Pro Max"
          />
        </div>
        <div className="py-5 flex flex-col justify-center items-start">
          <h1>IPHONE 16 PRO MAX</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            magnam sequi amet provident animi non et fugiat.
          </p>
        </div>
      </div>
    </div>
  );
};
//using props calling the cards
// ProductCard Component
/*const ProductCard = (props) => {
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

// Product Component
const Product = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
    
      <ProductCard product_image={"https://ik.imagekit.io/shivanim/ecom%20react/2-5kg-x-4-premium-quality-10-aman-fit-original-imahf75527svkq5m.webp?updatedAt=1737790836709"} product_title={"dumbell 5kg lite"} product_rating={"5000"} product_price={"500"}  />
        
       
      </div>
    </div>
  );
};*/



//for product list use this kind of procedure.
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

// Render to the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Product />);
