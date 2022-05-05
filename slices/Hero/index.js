import React from 'react'
import { PrismicText, PrismicLink } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Image from 'next/image'
import clsx from 'clsx'

const Hero = ({ slice }) => (
  <section className='container flex items-center justify-center md:justify-around flex-col md:flex-row py-36 md:py-56 lg:py-72 xl:py-80'>
    <div className={ clsx(
        'w-1/2 md:w-3/12 flex-grow-0',
        slice.variation === 'imageRight' && 'md:order-2'
      )
    }>
      <Image src={slice.primary.image.url} alt={slice.primary.image.alt} width={slice.primary.image.dimensions.width} height={slice.primary.image.dimensions.height} />
    </div>
    <div className={ clsx(
      'text-center',
      slice.primary.image.url && 'mt-8 md:mt-0 md:w-6/12 md:text-left'
    )}>
      <h1 className='font-headings text-3xl lg:text-5xl'>
        <PrismicText field={slice.primary.title} />
      </h1>
      {prismicH.isFilled.group(slice.items) && (
        <nav className='mt-10 -m-2'>
          { slice?.items?.map((item, i) =>
            <PrismicLink className='button m-2' 
              key={item.label} 
              field={item.link}
            >
              {item.label}
            </PrismicLink>
          ) }
        </nav>
      )}
    </div>
  </section>
)

export default Hero