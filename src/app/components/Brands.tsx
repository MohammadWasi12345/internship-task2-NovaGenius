import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'
import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <div>
        <div className='container font1 p-4 mx-auto'>
        <p className='text-gray-500 text-center'>TOP BRANDS</p>
        <h1 className="text-3xl font-bold mb-4 text-center">Explore Our Top Deals from 
        <br />Top Rated Dealers </h1>
        <div className='flex flex-wrap justify-center items-center'>
            <ul className='lg:flex space-y-4 space-x-6'>
                <li className='flex border px-4 text-white pt-2 space-x-3 bg-orange-400 rounded-md'><Image src={require('../../../public/assets/pics/download__2_-removebg-preview (3) 1.png')} alt='audi'/>
                <p>Audi</p></li>

                <li className='flex border px-4 text-black pt-1 space-x-3 bg-gray-200 rounded-md'><Image src={require('../../../public/assets/pics/download__10_-removebg-preview (3) 1.png')} alt='audi'/>
                <p>Toyota</p></li>
                <li className='flex border px-4 text-black pt-1 space-x-3 bg-gray-200 rounded-md'><Image src={require('../../../public/assets/pics/honda-logo-png-picture-20-removebg-preview 1.png')} alt='audi'/>
                <p>Honda</p></li>

                <li className='flex border px-4 text-black pt-1 space-x-3 bg-gray-200 rounded-md'><Image src={require('../../../public/assets/pics/download__11_-removebg-preview (2) 1.png')} alt='audi'/>
                <p>Nesson</p></li>

                <li className='flex border px-4 text-black pt-1 space-x-3 bg-gray-200 rounded-md'><Image src={require('../../../public/assets/pics/download__3_-removebg-preview (4) 1.png')} alt='audi'/>
                <p>Tesla</p></li>

                <li className='flex border px-4 text-black pt-1 space-x-3 bg-gray-200 rounded-md'>
                <p>Explore All</p></li>

            </ul>
        </div>


            
        </div>
    </div>
  )
}

export default Brands