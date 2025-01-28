import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import uniqid from 'uniqid';

const para = <p>hello world</p>;

const Counter = () => {
    const [value, setValue] = useState(0); // Correctly initializing useState
    let[name,setName]=useState('shivani');

    let [status,setStatus]=useState(true);

    

    return (
        <>
           <div className="bg-amber-100 mx-1 px-5   py-2 my-4 h-45 flex flex-col justify-center items-center margin-auto border-amber-950 ">
           <p>{value}</p>

<button
    className="bg-amber-600 w-[150px] h-10 rounded-lg px-3 py-2 mx-3"
    onClick={() => setValue(value + 1)} // Correctly updating state
>
    Increase
</button>

<button
    className="bg-blue-500 w-[150px] h-10 rounded-lg px-3 py-2 mx-3"
    onClick={() => setValue(value - 1)} // Correctly updating state
>
    Decrease
</button>
            </div> 

            <div className="bg-amber-100 mx-1 px-5 my-4 h-45 flex flex-col justify-center items-center margin-auto ">
            <p>update string value</p>

<p>{name}</p> 
<button className="bg-black text-white px-5 py-2 rounded-lg" onClick={()=>setName('shivu')}>change text</button>
            </div>
         
         
         <div className="bg-amber-100 mx-1 px-5 my-4 h-45 flex flex-col justify-center items-center margin-auto ">
         <p className="text-red-800">update bool value</p>
            {status?<p className="text-blue-800">true</p>:<p className="text-red-800">false</p>}
            <button className="text-white bg-black px-5 py-2 rounded-lg" onClick={()=>setStatus(!status)}>change bool value</button>

         </div>
        

        </>
    );
};