
import { useState } from 'react';
const App = () => {

  const [color,setColor] = useState("Olive");

  let colorarr = ["Red","Yellow","Gray","Green","Black","White","Pink","Violet"];

  function changeColor(ColorsItems){
    setColor(ColorsItems);
  }
  
  return (
  <div className = "w-full h-screen duration-200"
   style = {{backgroundColor: color}}>
    <div className="flex justify-evenly font-sans font-semibold bg-white-300 ml-5 mr-5  pt-2 pb-2 rounded-sm">
   {colorarr.map((ColorsItems)=>(
    <div className="text-white  rounded-lg p-2   cursor-pointer bg-orange-950 shadow-lg"
     onClick = {()=>changeColor(ColorsItems)}>{ColorsItems}</div>
   ))}
   </div>
  </div>
  )
}

export default App;


