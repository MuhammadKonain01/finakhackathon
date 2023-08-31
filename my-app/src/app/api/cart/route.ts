// import { NextResponse, NextRequest  } from "next/server";
// import { request } from "http";
// import { db, cartTable } from "@/lib/drizzle";
// import Quantity from "@/components/Quantity";
// import {v4 as uuid } from "uuid"
// import { cookies } from "next/dist/client/components/headers";
// import { eq } from "drizzle-orm";

// cookies().get("user_id")?.value

// fetch ('http://localhost:300/api/cart?user_id=${cookies().get("user_id")?.value}')

// export const GET = async (request:NextRequest)=>{
    
//     const req = request.nextUrl
    
//     const uid = req.searchParams.get("user_id") as string
    
    
//     try{
//         const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid)); 
//         return NextResponse.json({res}); 
//     }
//     catch(error){
//      console.log(error)
//      return NextResponse.json({message:"something went wrong"});    
//     }
// }


// export const POST = async (request:NextRequest)=>{


//     const req = await request.json()

// const uid = uuid();
// const setCookies = cookies();


// const user_id = cookies().get("user_id")

// if(!user_id){
// setCookies.set("user_id",uid);
// }   


//     try{
//         const res = await db.insert(cartTable).values(
//             {product_id: req.product_id,
//         quantity:1,
//     user_id: cookies().get("user_id")?.value as string
// }).returning
        
// return NextResponse.json({res})
//     }catch(error){

//     }
// }





import { addToCart, cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";


export const POST = async (request: NextRequest) => {
  const userId  = "12344dfghj";

  const req: addToCart = await request.json();

  try {
    if (req) {
      const res = await db.insert(cartTable).values({
          user_id: userId,
          product_id: req.product_id,
          quantity: req.quantity,
          image: req.image,
          price: req.price,
          product_name: req.product_name,
          subcat: req.subcat,
          total_price: req.price * req.quantity,
        })
        .returning();
      return NextResponse.json({Message:"Data Added" },{status:200});
    } else {
      throw new Error("Failed to insert Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "Something went wrong",
    });
  }
};