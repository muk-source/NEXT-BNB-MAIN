import Image from 'next/image'
import React from 'react'

function MediumCard({img,title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-150 ease-out'>
        <div className='relative w-80 h-80'>
            <Image src={img} fill={true}/>
        </div>
        
        <h2 className='text-2xl mt-3'>{title}</h2>
    </div>
  )
}

export default MediumCard