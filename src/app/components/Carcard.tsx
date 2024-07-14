import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
function CarCard() {
    return (
        <div className='mb-[100px] flex flex-col lg:flex-row mx-auto  space-y-4 items-center justify-between'>
            <div className="bg-white shadow-2xl rounded-xl w-96 p-4 border-2">
                <div className="relative">
                    <Image
                        src={require('../../../public/assets/pics/download__9_-removebg-preview (2) 1.png')}
                        alt="Car"
                        className="w-full rounded-xl shadow-2xl border-2"
                    />
                    <div className="absolute top-2 right-1 text-white rounded-full p-1">
                        <Image src={require('../../../public/assets/pics/ph_heart-fill.png')} alt='heart' />
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-bold">2020 Audi A4</h3>
                    <p className="text-orange-400 text-md font-bold">
                        $422 <span className="text-gray-400">/month</span>
                    </p>
                    <div className="flex border-t-2 justify-between border-black mt-6 space-x-2">
                        <div className=" flex space-x-1 rounded-md p-2">
                            <Image src={require('../../../public/assets/pics/Vector.png')} alt='vector' /> <p className='text-sm'>20k</p>
                        </div>
                        <div className=" flex space-x-1 rounded-md p-2">
                            <Image src={require('../../../public/assets/pics/icon-park-outline_auto-focus.png')} alt='vector' /> <p className='text-sm'>Auto</p>
                        </div>
                        <div className=" flex space-x-1 rounded-md p-2">
                            <Image src={require('../../../public/assets/pics/mdi_petrol-pump.png')} alt='vector' /> <p className='text-sm'>Petrol</p>
                        </div>
                    </div>
                    <Button variant={'default'} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md mt-4 w-full">
                        Rent Now
                    </Button>
                </div>
            </div>

            <div className="bg-white shadow-2xl rounded-xl p-4 w-96 border-2">
                <div className="relative">
                    <Image
                        src={require('../../../public/assets/pics/download__8_-removebg-preview (2) 1.png')}
                        alt="Car"
                        className="w-full rounded-xl shadow-2xl border-2"
                    />
                    <div className="absolute top-2 right-1 text-white rounded-full p-1">
                        <Image src={require('../../../public/assets/pics/ph_heart-fill.png')} alt='heart' />
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-bold">2020 Audi A4</h3>
                    <p className="text-orange-400 text-md font-bold">
                        $422 <span className="text-gray-400">/month</span>
                    </p>
                    <div className="flex border-t-2 justify-between border-black mt-6 space-x-2">
                        <div className=" flex space-x-1 rounded-md p-2">
                            <Image src={require('../../../public/assets/pics/Vector.png')} alt='vector' /> <p className='text-sm'>20k</p>
                        </div>
                        <div className=" flex space-x-1 rounded-md p-2">
                            <Image src={require('../../../public/assets/pics/icon-park-outline_auto-focus.png')} alt='vector' /> <p className='text-sm'>Auto</p>
                        </div>
                        <div className=" flex space-x-1 rounded-md p-2">
                            <Image src={require('../../../public/assets/pics/mdi_petrol-pump.png')} alt='vector' /> <p className='text-sm'>Petrol</p>
                        </div>
                    </div>
                    <Button variant={'default'} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md mt-4 w-full">
                        Rent Now
                    </Button>
                </div>
            </div>

            <div className="bg-white shadow-2xl rounded-xl p-4 w-96 border-2">
                <div className="relative">
                    <Image
                        src={require('../../../public/assets/pics/download__7_-removebg-preview (3) 1.png')}
                        alt="Car"
                        className="w-full rounded-xl shadow-2xl border-2 py-7"
                    />
                    <div className="absolute top-2 right-1 text-white rounded-full p-1">
                        <Image src={require('../../../public/assets/pics/ph_heart-fill.png')} alt='heart' />
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-bold">2020 Audi A4</h3>
                    <p className="text-orange-400 text-md font-bold">
                        $422 <span className="text-gray-400">/month</span>
                    </p>
                    <div className="flex border-t-2 justify-between border-black mt-6 space-x-2">
                        <div className=" flex space-x-1 rounded-md p-2">
                            <Image src={require('../../../public/assets/pics/Vector.png')} alt='vector' /> <p className='text-sm'>20k</p>
                        </div>
                        <div className=" flex space-x-1 rounded-md p-2">
                            <Image src={require('../../../public/assets/pics/icon-park-outline_auto-focus.png')} alt='vector' /> <p className='text-sm'>Auto</p>
                        </div>
                        <div className=" flex space-x-1 rounded-md p-2">
                            <Image src={require('../../../public/assets/pics/mdi_petrol-pump.png')} alt='vector' /> <p className='text-sm'>Petrol</p>
                        </div>
                    </div>
                    <Button variant={'default'} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md mt-4 w-full">
                        Rent Now
                    </Button>
                </div>
            </div>





        </div>

    );
}

export default CarCard;
