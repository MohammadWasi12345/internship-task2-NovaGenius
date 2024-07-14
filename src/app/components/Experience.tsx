import React from 'react'
import Image from 'next/image'
import { CheckIcon } from 'lucide-react';
const Experience = () => {
    return (

        <div className=' mb-[100px] container font1 p-4 mx-auto'>
            <p className='text-gray-500 text-center'>BEST EXPERIENCES</p>
            <h1 className="leading-relaxed text-3xl font-bold mb-4 text-center">We Are Ensuring Best <br />Costumer Experience </h1>

            <div className='flex justify-between items-center mt-4'>
                <div className='flex-col lg:space-y-64 ml-6'>
                    <div className="flex flex-col items-center mt-4">
                        <div className="flex flex-col  items-start">
                            <div className="w-16 h-16 rounded-md border-2 flex items-center justify-center text-white font-bold">
                                <Image src={require('../../../public/assets/pics/mdi_deal-outline.png')} alt='img' />
                            </div>
                            <div className="ml-4 font-bold text-sm">
                                competitive price
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <div className="flex flex-col  items-start">
                            <div className="w-16 h-16 rounded-md border-2 flex items-center justify-center text-white font-bold">
                                <Image src={require('../../../public/assets/pics/mdi_deal-outline.png')} alt='img' />
                            </div>
                            <div className="ml-4 font-bold text-sm">
                                Easier Rent <br /> On Your Budget
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col items-center mt-4">
                        <div className="flex flex-col  items-start">
                            <div className="w-16 h-16 rounded-md border-2 flex items-center justify-center text-white font-bold">
                                <Image src={require('../../../public/assets/pics/mdi_deal-outline.png')} alt='img' />
                            </div>
                            <div className="ml-4 font-bold text-sm">
                                The Best Extended <br /> Auto Warrenties
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <Image src={require('../../../public/assets/pics/download__12_-removebg-preview (2) 1.png')} alt='car' />
                </div>

                <div className='flex-col lg:space-y-64 mr-6'>
                    <div className="flex flex-col items-center mt-4">
                        <div className="flex flex-col  items-start">
                            <div className="w-16 h-16 rounded-md border-2 flex items-center justify-center text-white font-bold">
                                <Image src={require('../../../public/assets/pics/mdi_deal-outline.png')} alt='img' />
                            </div>
                            <div className="ml-4 font-bold text-sm">
                                Roadside <br /> Assistance 24/7
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <div className="flex flex-col  items-start">
                            <div className="w-16 h-16 rounded-md border-2 flex items-center justify-center text-white font-bold">
                                <Image src={require('../../../public/assets/pics/mdi_deal-outline.png')} alt='img' />
                            </div>
                            <div className="ml-4 font-bold text-sm">
                                Most Flexible <br />payment Plan
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col items-center mt-4">
                        <div className="flex flex-col  items-start">
                            <div className="w-16 h-16 rounded-md border-2 flex items-center justify-center text-white font-bold">
                                <Image src={require('../../../public/assets/pics/mdi_deal-outline.png')} alt='img' />
                            </div>
                            <div className="ml-4 font-bold text-sm">
                                Your Choice of <br /> machanics
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className='flex flex-wrap justify-center items-center mt-8 w-full'>
                <ul className='lg:flex space-y-4 space-x-6'>

                    <li className='flex justify-between pt-1 items-center border px-4 text-black  space-x-3 bg-gray-200 rounded-md'><Image src={require('../../../public/assets/pics/Group 92.png')} alt='audi' />
                        <p>Engine</p>
                        <CheckIcon className='text-red-500'/>
                        </li>
                    <li className='flex justify-between items-center border px-4 text-black pt-1 space-x-3 bg-gray-200 rounded-md'><Image src={require('../../../public/assets/pics/Group 93.png')} alt='audi' />
                        <p>Transmission</p>
                        <CheckIcon className='text-red-500'/>
                        </li>

                    <li className='flex justify-between items-center border px-4 text-black pt-1 space-x-3 bg-gray-200 rounded-md'><Image src={require('../../../public/assets/pics/Group 94.png')} alt='audi' />
                        <p>Electrical</p>
                        <CheckIcon className='text-red-500'/>
                        </li>

                    <li className='flex justify-between items-center border px-4 text-black pt-1 space-x-3 bg-gray-200 rounded-md'><Image src={require('../../../public/assets/pics/Group 95.png')} alt='audi' />
                        <p>Cooling</p>
                        <CheckIcon className='text-red-500'/>
                        </li>

                    <li className='flex border px-4 text-black justify-between items-center pt-1 space-x-3 bg-gray-200 rounded-md'>
                    <Image src={require('../../../public/assets/pics/Group 96.png')} alt='audi' />
                        <p>20+ check off</p>
                        <CheckIcon className='text-red-500'/>
                        </li>

                </ul>
            </div>
        </div>
    )
}
export default Experience;