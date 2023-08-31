"use client"
import Image from 'next/image'
import { Image as IImage} from 'sanity';
import {urlForImage} from '../../sanity/lib/image'
import {FC} from 'react'
import { json } from 'stream/consumers';


export const ProductCard1: FC<{item: any}> = ({item}) => {

  
const handleAddToCart = async ()=>{
    const res = await fetch("api/cart",{
        method :"POST",
        body : JSON.stringify({
       product_id : item._id
        })
    })
    const result = (await res).json()
    console.log(result);
}

    return (
    <>
    <Image
    className='max-h-[200px] object-cover' 
    width={300}
    height={300}
     src={urlForImage(item.image).url()} alt="product"/>
   
     <h1>{item.title}</h1>
     <h1>{item.price}</h1>
     

     <button onClick={()=> handleAddToCart()} className='border py-2 px-6 rounded-full bg-blue-600 text-white'>Add to Cart</button>
     

</>
  )
}
