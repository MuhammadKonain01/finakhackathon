import { Product } from "@/utils/type";
import { ProductCart } from "@/components/ProductCart";
import { Products } from "@/utils/mock";
import Image, { StaticImageData } from 'next/image'

const AllProducts=()=>{
    return (
        <div className='flex justify-evenly mt-16 flex-wrap'> 
        {
          Products.map((product)=>(
            <ProductCart key={product.id}
            title={product.name}
            price={product.price}
            img={product.image}
            category={product.category}
            id={product.id}
            />
        ))}
    
  
    
        </div>

);
};

export default AllProducts;