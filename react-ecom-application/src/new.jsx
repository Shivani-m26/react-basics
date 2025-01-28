import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import uniqid from 'uniqid';


//usestate code.

//using normal variable.
/*const New=()=>{

    let value=10;
    return(

        <>
         <p>usestate</p>
         <p>{value}</p>
         <button className="bg-green-500 px-5 text-[white] text-[20px]" onClick={()=>{
            value=value+1;
            console.log(value);
            

         }}>click me</button>
        </>
       
       
    )

}
*/

//local state variable

const New=()=>{

    const [value,setValue]=React.useState(10);
    return(

        <>
         <p>usestate</p>
         <p>{value}</p>
         <button className="bg-green-500 px-5 text-[white] text-[20px]" onClick={()=>{
            setValue(value+1);
            console.log(value);
            

         }}>click me</button>
        </>
       
       
    )

}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<New/>); // Rendering the component correctly