import Image from 'next/image'
import React from 'react'

function SmallCard({img,distance,location}) {
  return (
    <div className='flex items-center space-x-4 mt-5 hover:bg-gray-100 cursor-pointer hover:scale-105 transition tranform duration-100 ease-out sm:mx-4'>
        <Image src={img} width={64} height={64} className="rounded-xl"></Image>
        <div>
            <h2>{location}</h2>
            <h3 className='text-gray-500'>{distance}</h3>
        </div>
    </div>
  ) 
}

export default SmallCard