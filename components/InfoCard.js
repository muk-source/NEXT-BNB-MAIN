import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

function InfoCard({description,img,lat,location,long,price,star,title,total}) {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 '>
        <div className='relative h-24 w-40 md:h-52 md:w-80 object-cover flex-shrink-0 '>
            <Image src={img} fill={true} className="rounded-2xl"/>  
        </div>
        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p className=''>{location}</p>
                <HeartIcon className='h-7 cursor-pointer'/>
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='border-b w-10 pt-2'></div>
            <p className='pt-2 text-gray-500 text-sm flex-grow'>{description}</p>
            <div className='flex justify-between pt-5'>
                <p className=' flex items-center'>
                    <StarIcon className='h-5 text-red-400'/>{star}
                </p>
                <div>
                    <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
                    <p className='font-extralight text-right'>{total}</p>
                </div>
                
            </div>
        </div>
        
        
    </div>
  )
}

export default InfoCard