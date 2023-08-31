"use client"
import React from 'react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/store/slice/cartSlice'
import { toast, } from 'react-hot-toast';
 

export const AddToCart = () => {
  const dispatch =useDispatch();
  const addIems =()=>{
 dispatch(cartActions.addToCart({ product: {}, quantity: 1 })); 
    toast.success("Product Added")
  }
  return (
    <Button onClick={addIems} className='bg-black text-white border rounded p-1 mt-4'>Add To Cart</Button>
  )
}

export default AddToCart;