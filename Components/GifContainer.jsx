import Image from 'next/image'
import React from 'react'


function GifContainer({src,alt}) {

  return (
    <figure className='relative h-60 w-60'>
        <Image fill sizes='80vw' className='p-4 bg-green-palette' src={`${src}`} alt={alt} />
    </figure>
  )
}

export default GifContainer