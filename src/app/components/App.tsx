'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
function App() {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    return (
        <div className="container font1 mx-auto p-4 mb-[100px]">
            <p className='text-gray-500 text-center'>How it works</p>
            <h1 className="text-3xl font-bold mb-4 text-center">Rentgo following 3 working steps</h1>
            <div className="flex items-center justify-center">
                {step === 1 && (
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="w-16 h-16 bg-white  shadow-lg flex items-center justify-center">
                            <Image src={require('../../../public/assets/pics/mdi_location.png')} alt='locaion' />
                        </div>
                        <h2 className="text-lg font-semibold">Choose a location</h2>
                        <p className="text-gray-600 text-center ">Discover car rental option in your city. Select from a range of car options.</p>
                        <Button variant={'default'}
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleNextStep}
                        >
                            Next
                        </Button>
                    </div>
                )}
                {step === 2 && (
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="w-16 h-16 bg-orange-400  shadow-lg flex items-center justify-center">
                            <Image src={require('../../../public/assets/pics/uis_calender.png')} alt='locaion' />
                        </div>
                        <h2 className="text-lg font-semibold">Pick-up date</h2>
                        <p className="text-gray-600 text-center ">Discover car rental option in your city. Select from a range of car options.</p>
                        <Button variant={'default'}
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleNextStep}
                        >
                            Next
                        </Button>
                        <Button
                            variant={'default'} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handlePreviousStep}
                        >
                            Previous
                        </Button>
                    </div>
                )}
                {step === 3 && (
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="w-16 h-16 bg-white  shadow-lg flex items-center justify-center">
                            <Image src={require('../../../public/assets/pics/material-symbols_book.png')} alt='locaion' />
                        </div>            <h2 className="text-lg font-semibold">Book your car</h2>
                        <p className="text-gray-600 text-center ">Discover car rental option in your city. Select from a range of car options.</p>
                        <Button variant={'default'}
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => alert('Booked!')}
                        >
                            Book Now
                        </Button>
                        <Button variant={'default'}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handlePreviousStep}
                        >
                            Previous
                        </Button>
                    </div>
                )}
            </div>

            <div className="bg-white  text-black font1 py-20 px-10">

                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-32'>



                    <div className='mb-12 ml-12 md:ml-0 flex justify-center mx-auto w-full md:mb-16 sm:flex-col sm:items-center md:flex-row '>
                        <div className='w-full h-full'>
                            <Image src={require('../../../public/assets/pics/pngtree-a-car-png-image_2449751-removebg-preview 1.png')} alt='img' className='object-cover object-center' height={500} width={500} />
                        </div>
                    </div>
                    <div className="max-w-screen-xl md:w-[100%] mx-auto">
                        <h5 className='text-sm text-gray-400'>BEST SERVOCES</h5>
                        <h1 className="text-4xl md:mt-4 mt-3 font-bold md:w-3/4 mb-4">
                        Feel the best experience with our
                        rental deals
                        </h1>

                        <ul className="list-none pl-0 mb-6 space-y-8">
                            <li className='flex  space-x-4'>
                                <Image src={require('../../../public/assets/pics/mdi_deal-outline.png')} alt='check' className=' shadow-lg border-gray-300 border-2 rounded-sm p-3' height={100 } width={100} />
                                <div className='flex-col space-y-4'>
                                <h3 className="font-extrabold">Deals for every budget</h3> 
                                <p className='w-3/4'>Discover car rental option in your city.
                                Select from a range of car options.</p>
                                </div>
                                 
                            </li>
                            <li className='flex  space-x-4'>
                                <Image src={require('../../../public/assets/pics/ri_handbag-fill.png')} alt='check' className=' shadow-lg border-gray-300 border-2 rounded-sm p-3' height={100 } width={100} />
                                <div className='flex-col space-y-4'>
                                <h3 className="font-extrabold">Best price guarented</h3> 
                                <p className='w-3/4'>Discover car rental option in your city.
                                Select from a range of car options.</p>
                                </div>
                                 
                            </li>
                            <li className='flex  space-x-4'>
                                <Image src={require('../../../public/assets/pics/ri_customer-service-2-fill.png')} alt='check' className=' shadow-lg border-gray-300 border-2 rounded-sm p-3' height={100 } width={100} />
                                <div className='flex-col space-y-4'>
                                <h3 className="font-extrabold">Support 24/7</h3> 
                                <p className='w-3/4'>Discover car rental option in your city.
                                Select from a range of car options.</p>
                                </div>
                                 
                            </li>
                        </ul>
                    </div>

                </div>

            </div>




        </div>

        
    );
}

export default App;