import React from 'react'
import { Products } from "@/utils/mock"

import ProdctImage1 from "public/02.jpg"
import ProdctImage2 from "public/05.jpg"
import ProdctImage3 from "public/06.jpg"
import Image from 'next/image'
import { ProductCart } from '@/components/ProductCart'

export const ProductsList = () => {
  const productChecks = Products.slice(0,4);
  return (
    <div className='flex justify-evenly mt-16'> 
    {
      productChecks.map((product)=>(
        <ProductCart key={product.id} title={product.name} price={product.price}
        img={product.image }
        category={product.category}
        id={product.id}
        />
        
      ))
    }

{/* <ProductCart title="Flat Snadal" price={100} img={ProdctImage1} />
<ProductCart title="Snadal" price={200} img={ProdctImage1}/>
<ProductCart title="Shoes" price={500} img={ProdctImage1}/> */}


    </div>
  );
};
