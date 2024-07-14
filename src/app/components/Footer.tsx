import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
import { BsGeoAlt } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
const Footer = () => {
    return (
        <footer className="bg-[#222D39] w-screen mx-auto text-gray-300 py-10 items-center p-8">
            <div className="container gap-3 mx-auto flex md:h-[300px] flex-col md:flex-row justify-between items-center px-4 space-y-6">
                <div className="mb-6 font1 md:w-1/3 md:mb-0">
                    <Link href="/" className="text-xl font-bold text-md md:ml-0 ml-2">
                        <Image src={require('../../../public/assets/pics/Mask group.png')} alt="Car Rental Logo" height={100} width={100} className="h-8 md:-mt-8" />Car Rental
                        <p className='bg-orange-400 w-fit text-sm text-white px-1'>Premium Service</p>
                    </Link>
                    <p className='text-sm mt-2 leading-relaxed'>Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis et velit interdum, ac aliquet odio mattis ac aliquet odio mattis et velit interdum, ac aliquet odio mattis.</p>
                    <div className='flex space-x-4 mt-2'>
                        <Image src={require('../../../public/assets/pics/Group 128.png')} alt='fb'/>
                        <Image src={require('../../../public/assets/pics/Group 129.png')} alt='snap'/>
                        <Image src={require('../../../public/assets/pics/Group 130.png')} alt='twitter'/>
                        <Image src={require('../../../public/assets/pics/Group 131.png')} alt='insta'/>
                        <Image src={require('../../../public/assets/pics/Group 132.png')} alt='google'/>
                    </div>
                </div>
                <div className="w-full md:w-1/4 md:ml-12 ">
                    <h3 className="text-lg text-white font-medium mb-4 font1">About Us</h3>
                    <div className='flex '>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:underline">Why Rental</a></li>
                            <li><a href="#" className="hover:underline">Our Story</a></li>
                            <li><a href="#" className="hover:underline">Centres</a></li>
                            <li><a href="#" className="hover:underline">Investors</a></li>

                        </ul>
                        

                    </div>

                </div>
                <div className="w-full md:w-1/4">
                    <h3 className="text-lg text-white font-medium mb-4 font1">Extras</h3>
                    <ul className="space-y-4">
                        <li><a href="#" className="hover:underline">Repair Center</a></li>
                        <li><a href="#" className="hover:underline">Booking</a></li>
                        <li><a href="#" className="hover:underline">News Offers</a></li>
                        <li><a href="#" className="hover:underline">Investors</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4">
                    <h3 className="text-lg font-medium text-white mb-4 font1">Our Resources</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            Help Center
                        </li>
                        <li className="flex items-center">
                            Guides
                        </li>
                        <li className="flex items-center">
                            News Offers
                        </li>
                        <li className="flex items-center">
                            Investors
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-2 lg:w-1/3 w-full mx-auto mt-8 lg:mt-0">
                                    <div className="relative ">
                                        <label htmlFor="email" className="text-gray-300 font-bold  leading-7 text-sm  ">
                                            News Letter
                                        </label>
                                        <div className='flex'>
                                        <input
                                            placeholder='Enter Your Email'
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full bg-white   border border-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            required
                                            
                                        />
                                        <button className='bg-orange-500 px-4'><ArrowRight/></button>
                                        </div>
                                       
                                    </div>
                                </div>
            <div className="md:ml-8 md:mt-4 mx-auto mt-3 flex border-t-2 justify-center pt-1 items-center text-sm">

               <h3 className=' text-center'>All Rights Reserved <span className='text-orange-500'>@MuskanShiraz</span></h3>
            </div>
        </footer>
    );
};

export default Footer;