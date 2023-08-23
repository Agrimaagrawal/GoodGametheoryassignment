import { useContext } from "react";
import { useEffect,useState } from "react";
import { AppContext } from "../Context";


const Data = () => {
    
    const {data}=useContext(AppContext);
   
   
  return (
    <div className="flex flex-wrap gap-10 justify-evenly">
      {
        
        data.map((e)=>{
          return(
             <div key={e.id} className='w-[300px] border-2 border-black p-5 flex flex-col items-center gap-3'>
              <div>
                  <img src={e.image_url} className="w-28 h-80"></img>
              </div>
              <div className="text-xl font-bold">{e.name}</div>
              <div >{e.description}</div>
              <div>Volume: {e.volume.value}</div>

             </div>
          )
      })
      
       
      }
      {  console.log(data)}
      
    </div>
  )
}

export default Data
