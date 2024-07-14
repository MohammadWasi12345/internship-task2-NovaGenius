
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
    return (
        <div className='mb-[100px]'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light max-w-[100%]">
                <div className=" mx-auto w-full  justify-between flex md:justify-end">
                    <div className="bg-[#253241] w-full lg:w-3/4 h-12 text-white text-sm flex  justify-between md:flex-nowrap md:space-x-40 space-x-10">
                        <div className="flex space-x-3 ml-5 md:ml-5">
                            <Image src={require('../../../public/assets/pics/ooui_message.png')} alt="logo"  />
                            <p className="mt-2 hidden md:block">Support@muskansheraz.com</p>
                        </div>
                        <div className="flex space-x-3">
                            <Image src={require('../../../public/assets/pics/ph_clock.png')} alt="logo" />
                            <p className="mt-2">Mon to Fri 8:00am to 6:00pm</p>
                        </div>
                        <div className="flex space-x-3 bg-orange-500 mr-5 md:mr-5">
                            <Image src={require('../../../public/assets/pics/mdi_chat.png')} alt="logo" />
                            <p className="p-2 hidden md:block">Online Chat</p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </nav>
            <nav className="bg-white text-black py-2 font1">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold text-md md:ml-0 ml-2">
                        <Image src={require('../../../public/assets/pics/Mask group.png')} alt="Car Rental Logo" height={100} width={100} className="h-8 md:-mt-8" />Car Rental
                        <p className='bg-orange-400 text-sm text-white px-1'>Premium Service</p>
                    </Link>
                    <div className="hidden lg:flex space-x-6">
                        <Link href="/home" className="hover:text-gray-300">Home</Link>
                        <Link href="/about" className="hover:text-gray-300">Rent</Link>
                        <Link href="/about" className="hover:text-gray-300">Share</Link>
                        <Link href="/about" className="hover:text-gray-300">Ride</Link>
                        <Link href="/services" className="hover:text-gray-300">Services</Link>
                    </div>
                    <div className="flex space-x-16">
                        <div className='lg:flex hidden space-x-2 mt-4 md:mr-0 mr-2'>

                            <CgProfile className='text-2xl' /><Link href="/login" className="text-gray-900">SignUp</Link>

                        </div>
                        <div className="lg:flex space-x-2  border border-black p-3 text-sm hidden ">
                            <BsTelephone className='text-2xl mt-2' /><p> Call us <br /> +92 3332431081</p>
                        </div>
                        <div>
                            <Sheet >
                                <SheetTrigger className='lg:hidden'><IoMenu className='text-3xl' /></SheetTrigger>
                                <SheetContent>
                                    <SheetHeader >
                                        <SheetTitle className='font1' >Car Rental</SheetTitle>
                                        <SheetDescription>
                                            <div className=" flex flex-col space-y-6 text-md">
                                                <Link href="/home" className="hover:text-gray-300">Home</Link>
                                                <Link href="/about" className="hover:text-gray-300">Rent</Link>
                                                <Link href="/about" className="hover:text-gray-300">Share</Link>
                                                <Link href="/about" className="hover:text-gray-300">Ride</Link>
                                                <Link href="/services" className="hover:text-gray-300">Services</Link>
                                            </div>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>

                        </div>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

