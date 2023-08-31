import { title } from "process";
import { defineField } from "sanity";
import { db } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";

export const product={

    name    : "product",
    type    : "document",
    title   : "Product",
fields:[
    {
        name    : "title",
        title   : "Title",
        type    :  "string"
    },
    {
        name : "price",
        title : "Product Price",
        type:   "number"
    },


    {
         name    : "description",
        title   : "Product Description",
        type    :  "string"
    },

    {
        name    : "category1",
       title   : "Product Category",
       type    :  "string",
   },


    {
        name    : "image",
        title   : "Product Image",
        type    :  "image"
    },

    defineField(
    {
    name    : "category",
        title   : "Product Image",
        type    :  "reference",
        to:     [{
            type :"category",
        }],

    })

]
}