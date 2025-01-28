import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";






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