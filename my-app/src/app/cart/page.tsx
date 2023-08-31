import Image from 'next/image'
import React from 'react'
import p3 from "public/P_image.png"
import { BiTrash } from "react-icons/bi";
import Quantity from '@/components/Quantity';

export default function Cart() {
  return (
    <div className='py-10 px-4 md:px-20'>
        <div className='py-6'>
            <h1 className='text-xl font-semibold text-gray-900'>Shopping Cart</h1>
            </div>
        
        
        <div className='flex gap-8'>
            <div className='flex basis-7/12 gap-6'>
                <div className='w-52'> <Image className='rounded-xl' width={1000} height={1000} src={p3} alt='Nothing'/> </div>
                <div className=' space-y-3 w-full'>
                    <div className='flex justify-between'>
                        <h2 className='text-xl text-gray-700 '> Brushed Raglan Sweatshirt</h2>
                        <BiTrash size={28}/>
                    </div>
                    <p className='text-gray-500 font-medium '>Dress</p>
                    <h3>Delivery Estimation</h3>
                    <h4 className='text-yellow-500 font-semibold'>5 Working Days</h4>
                    <div className='flex justify-between'>
                        <p className='font-semibold text-lg '>$345</p>
                        <Quantity/>
                    </div>
                </div>
                
            </div>
            <div className='basis-1/4'>
                <h6 className=''>Order Summary</h6>
                <div>
                    <p>Quantity: </p>
                    <p>2 Products </p>
                </div>
                  </div>
        </div>
    </div>
  )
}