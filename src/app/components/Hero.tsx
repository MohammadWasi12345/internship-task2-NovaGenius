
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


const Hero = () => {
    return (

        <div className='mb-[100px]'>
            <div className="hero min-h-screen bg-base-200 container background-img ">
                <div className="hero-content flex flex-col lg:flex-row space-y-10 lg:space-y-0">
                    <div className="text-center lg:text-left lg:w-3/4 font1  ">
                        <h1 className="text-5xl font-bold ">Looking to save more
                            on your rental car?</h1 >
                        <p className="py-6 lg:w-1/2">Discover car rental option in your city.
                            Select from a range of car options.</p>
                        <Button variant={'default'} className='bg-orange-500'>Book Now</Button>

                    </div>
                    <div className=''>
                        <Image src={require('../../../public/assets/pics/pngtree-amazing-lllustrations-of-yellow-jeep-rubicon-png-image_1002693-removebg-preview 1.png')} alt='hero' />

                    </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-xl ">
                    <div className="flex flex-col lg:flex-row space-x-10 mx-auto  justify-center">
                        <div className="ml-6">
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                Select Company
                            </label>
                            <select id="company" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                <option value="All Company">All Company</option>
                                <option value="Company 1">Company 1</option>
                                <option value="Company 2">Company 2</option>
                            </select>
                        </div>
                        <div className="mr-4">
                            <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                                Select Model
                            </label>
                            <select id="model" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                <option value="All Models">All Models</option>
                                <option value="Model 1">Model 1</option>
                                <option value="Model 2">Model 2</option>
                            </select>
                        </div>
                        <div className="mr-4">
                            <label htmlFor="roof" className="block text-sm font-medium text-gray-700">
                                Select Roof
                            </label>
                            <select id="roof" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                <option value="Open/Closed">Open/Closed</option>
                                <option value="Sunroof">Sunroof</option>
                                <option value="Hardtop">Hardtop</option>
                            </select>
                        </div>
                        <div className="mr-4">
                            <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">
                                Select Fuel
                            </label>
                            <select id="fuel" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                <option value="All Fuel">All Fuel</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                            </select>
                        </div>
                        <Button variant={'default'} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 mt-3 ">
                            Search
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero