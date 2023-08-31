"use client"
import React, {useState} from 'react';
import AddToCart from './AddToCart';

// let num = 1;

const Quantity = () => {

  const [num,setNum] = useState(1);
  return (
    <div className='flex items-center gap-x-2'>
      {/* {Minus} */}
      <button
      onClick={()=>{
        setNum(num <=1 ? 1: num - 1);
        }}
        className="w-6 h-6 border rounded-full center"
        >
        -
      </button>



      {/* {Number} */}
      <span className='text-sm'>
        {num}
        </span>

        
      {/* {Plus} */}
     
      <button className='w-6 h-6 border rounded-full _center'
      onClick={()=>{

        setNum(num + 1)
        }}
        >
        +
      </button>

    </div>
  )
}

export default Quantity;