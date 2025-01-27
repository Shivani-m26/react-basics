import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import uniqid from 'uniqid';
   

const CommentComponent=()=>{
    const [name,setName]=useState('');
    const [message,setMessage]=useState('');
    //we can store many states in a object
    const [data,setData]=useState({name:'',message:''});
    return(
        <>
          <div className="flex flex-col justify-center items-center h-screen gap-5 bg-blue-100">

          <p>Comment Component</p>
            <div className="flex flex-col justify-center items-center">
            <label htmlFor="name">Name</label>
            <input className="border border-black" id="name" onChange={(e)=>{
                console.log(e.target.value);
                //calling setData
                setData({name:e.target.value});
            }} />
            </div>
         
            <div className="flex flex-col justify-center items-center">
            <label htmlFor="message">Message</label>
            <textarea className="border border-black" name="" id="message" onChange={(e)=>{
                console.log(e.target.value);
               setData({message:e.target.value});
            }}></textarea>
            </div>
          
        

        
        <button className="bg-black text-white px-2 py-2 rounded-lg">Submit</button>

        
           <p>Component</p> 
        <p>Name:  {name}
            </p> 
     
        <p> Message: {message}</p>
        <p>{JSON.stringify(data)}</p>

          </div>
           
        </>
     
    )
 
    

}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CommentComponent />); // Rendering the component correctly