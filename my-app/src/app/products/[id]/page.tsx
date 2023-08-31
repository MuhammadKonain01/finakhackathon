
import AddToCart from "@/components/AddToCart";
import Quantity from "@/components/Quantity";
import { Products } from "@/utils/mock";
import { StaticImageData } from 'next/image'
import Image from "next/image";


const getProductsDetail= (id:number | string)=>{

return Products.filter((product)=>product.id==id);
};

const sizes = ["xc", "sm", "md", "lg", "xl"];

export default function Page({ params }: { params: { id: string } }) {
    const result = getProductsDetail(params.id);
    return (
      <div className="flex mt-16 py-10 flex-wrap">
        {
     
          result.map((product) => (
    <div key={product.id} className="flex justify-between gap-6 ">

              <div>
                <Image src={product.image} alt="product.img" />
                </div>
                
                <div>
                  <div>
                <h1 className="text-2xl">{product.name}</h1>
                <h2 className="text-base text-gray-400 font-semibold">{product.tagline}</h2>
              </div>
          <div>
          <h3 className="text-xs mt-6 font-semibold">Select Size</h3>
      <div className="flex gap-x-3">
          {
              sizes.map((item)=>{
                return(
                  <div className="flex items-center justify-center w-6 h-6 mt-2 duration-300 border rounded-full hover:shadow-xl">

                  <span className="text-[10px] font-semibold text-center text-gray-600">    
                     {item}
                </span>
                  </div>
               
                  );
              
              }) }

          </div>

                <div className="flex mt-6 items-center gap-x-3 ">
                  <h3 className="text-[10px] font-semibold">Quantity</h3>
                  <Quantity/>
                </div> 

                {/* { Add To cart }   */}
                <div className="mt-5 flex items-center gap-x-4">
                <AddToCart />
                <h2 className="text-2xl font-bold mt-5">${product.price.toFixed(2 )}</h2>

                </div>
                
                </div>
            </div>
            </div>
            
          ))}

      {/* This is Product Page For Product Id{params.id} */}
      </div>

    );
  }
  