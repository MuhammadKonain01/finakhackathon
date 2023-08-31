// // import Image from 'next/image'
// // import Hero from "@/views/Hero"
// import { Hero } from '@/views/Hero'
// // import { ProductsList } from '@/views/ProductsList'


// // export default function Home() {
// //   return (
// //     <>
// // <Hero /> 
// // <ProductsList />


    
// //     </>
// //   )
// // }
 


import { ProductsList } from '@/views/ProductsList'


import Image from 'next/image'
// import { client } from "sanity/lib/sanityClient"
import {client} from "@/lib/sanityClient"
import Page from './category/[slug]/page';
import { Image as IImage} from 'sanity';
import {urlForImage} from '../../sanity/lib/image'
import {ProductCard1} from "./ProductCard1"


 const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price,
    _id,
    image,
    title,
    category->{
      name
    }
  }`);
  return res
}





interface IProduct {
  title: string,
  _id: string,
  description: string,
  image: IImage,
  price: number,
  category:{
    name:string
  }
} 6 

export default async function Home() {

  const data: IProduct[] = await getProductData()
  return (
    <div className='grid grid-cols-[auto,auto,auto] justify-center gap-x-10'>
      {data.map((item) => (
        
        <>

<div>
      <ProductCard1 item={item}/>
         </div>

         
        </>
       
      ))}
    </div>
  )
}




// import { sql } from "@vercel/postgres";

// export default async function Cart( ): Promise<JSX.Element> {
//   const { rows } = await sql`SELECT * from `;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.id} - {row.quantity}
//         </div>
//       ))}
//     </div>
//   );
// }