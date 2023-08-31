import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import heroImage from "public/header.webp" 
import Image from 'next/image'

export const Hero = () => {
  return (
    
    <section className='flex flex-col gap-y-10  lg:flex-row py-6  '>
        {/* Lef Div */}
        <div className='flex-1 py-20'>
        <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700 '>Badge</Badge>

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-12">
      The World Best Shoes
    </h1>

    <p className="leading-7 [&:not(:first-child)]:mt-6">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </p>
      
      <Button className='bg-blue-800 py-4 px-6 mt-12 text-white rounded'>Start Shopping</Button>
        </div>

        
        {/* Right Div */}
<div className='flex-1 pl-10'>
  <Image src={heroImage} className=''
      height={500} width={500} alt='heroImage'></Image>
</div>

    </section>
  )
}