import { useState } from "react";
import { useEffect } from "react";
import Album from "../Album";
import Pagination from "../Pagination";

const Colors = () => {
const [colordata,setcolordata]=useState([])
const [colorsperpage,setcolorsperpage]=useState(20)
const [current,setcurrent]=useState(0)
useEffect(()=>{
   (async function(){
    const data=await fetch("https://jsonplaceholder.typicode.com/photos") .then((response)=>response.json())
    console.log(data)
    setcolordata(data)
   })()

},[])
    return ( 
        <div>
             <Album current={current} colordata={colordata} colorsperpage={colorsperpage}
             />
             <Pagination colorsperpage={colorsperpage} colordata={colordata} setcurrent={setcurrent} current={current}
             />
        </div>
     );

}
 
export default Colors;