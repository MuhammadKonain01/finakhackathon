import React from 'react'
import ProdctImage1 from "public/02.jpg"
import ProdctImage2 from "public/03.jpg"
import ProdctImage3 from "public/04.jpg"
import Image, { StaticImageData } from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import AddToCart from './AddToCart';


export const ProductCart = (props:
  {title:string,
    price:number,
    img:StaticImageData,
    category:string,
  id:number}) => {
  return (
    <Link href={`/products/${props.id}`}>
    <div className='p-5'>
      
<Image src={props.img} alt='ProductImage'/>
<h3 className='font-bold text-lg mt-3'> {props.title}</h3>
<p className='font-bold text-lg mt-3'> ${props.price}</p>
<p className='font-bold text-lg mt-3'> Category<span className='text-ba'>
{props.category}</span></p>

{/* <Link href={"/"} ><Button className='bg-black text-white rounded w-20'>Add  to Cart</Button>
</Link> */}
<AddToCart />
    </div>
    </Link>
   )
}
