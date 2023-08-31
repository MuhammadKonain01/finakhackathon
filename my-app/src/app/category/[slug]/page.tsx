
import { ProductCart } from "@/components/ProductCart";
import { Products } from "@/utils/mock";
import Image, { StaticImageData } from 'next/image'

const getProductsByCategory= (category:string)=>{

return Products.filter((product)=>product.category===category);
};




export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductsByCategory(params.slug);
    return (
      <div className="flex justify-evenly mt-16 py-10 flex-wrap">
        {
      result.length > 0 ? (
          result.map((product) => (
            <ProductCart
              key={product.id}
              title={product.name}
              price={product.price}
              img={product.image as StaticImageData}
              category={product.category}
              id={product.id}
              
            />
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    );
  }
  