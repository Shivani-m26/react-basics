

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";


const CommentComponent=()=>{
    const [name,setName]=useState('');
    const [message,setMessage]=useState('');
    //we can store many states in a object
    const [data,setData]=useState({name:'',message:''});
    //array
    const [commentData,setCommentData]=useState([]);

    return(
        <>
          <div className="flex flex-col justify-center items-center h-screen gap-5 bg-blue-100">

          <p>Comment Component</p>
            <div className="flex flex-col justify-center items-center">
            <label htmlFor="name">Name</label>
            <input className="border border-black" id="name" onChange={(e)=>{
                console.log(e.target.value);
                //calling setData using direct method
              //  setData({name:e.target.value});

              //calling using callback functions
              setData((prevData)=>{
                return {...prevData,name:e.target.value};
                
            })
            }} />
            </div>
         
            <div className="flex flex-col justify-center items-center">
            <label htmlFor="message">Message</label>
            <textarea className="border border-black" name="" id="message" onChange={(e)=>{
                console.log(e.target.value);
        //         calling setData using direct method
        //       setData({message:e.target.value});

        //calling using callback functions
        setData((prevData)=>{
            return {...prevData,message:e.target.value};
            
        })
            }}></textarea>
            </div>
          
        

        
        <button className="bg-black text-white px-2 py-2 rounded-lg" onClick={()=>{
            //direct value to array
        //    setCommentData([data]);

            //using callback functions for array
            setCommentData((prevData)=>{
                return{...prevData,data};
            })
        }}>Submit</button>

        
           <p>Component</p> 
        <p>Name:  {name}
            </p> 
     
        <p> Message: {message}</p>
        <p>{JSON.stringify(data)}</p>

          </div>
           
        </>
     
    )
 
    

}