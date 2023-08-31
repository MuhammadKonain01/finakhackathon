"use client";
import { useSelector,useDispatch } from "react-redux/es/exports";
import { RootState } from "@/store/store";
import logo from "/public/logo.png"
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import {ShoppingCart} from "lucide-react"
import { Input } from "@/components/ui/input"

const Header = () => {
   const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  return (
   
   <div className="flex justify-between items-center py-6 px-8 ">
    <Link href={"/"}><Image src={logo}  alt="logo" width={100} height={100} /></Link>
    <ul className="flex gap-12">
    <li className="text-lg">
        <Link href={"/category/female"}>Female</Link>
        </li>
    <li className="text-lg">
    <Link href={"/category/male"}>Male</Link>
    </li>
    <li className="text-lg">
    <Link href={"/category/kids"}>Kids</Link>
    </li>
    <li className="text-lg">
    <Link href={"/products"}>All Products</Link>
    </li>
    </ul>
{/*  
   <div className="flex justify-center items-center">
   <Input type="email" placeholder="Email" />   
    </div>
     */}
   <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
                <span className="absolute right-1 top-0 rounded-full bg-red-500 h-4 w-4 text-white text-sx text-center">{cartValue}</span>
                <ShoppingCart className="h-6 w-6" />
        
    </div>
 
 
 
   </div>
  
  )
  
}
export default Header