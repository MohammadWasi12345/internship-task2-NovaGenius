'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import img from '../../../public/assets/pics/Ellipse 4.png';
import img2 from '../../../public/assets/pics/Ellipse 5.png';
import img3 from '../../../public/assets/pics/Ellipse 6.png';
import Starrating from './StarRating';
import { transform } from 'next/dist/build/swc';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: img,
            review: '“Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis et velit interdum, ac aliquet odio mattis ac aliquet odio mattis et velit interdum, ac aliquet odio mattis.”',
            name: 'Alex Cathy',
            title: 'customer',
        },
        {
            image: img2,
            review: '“Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis et velit interdum, ac aliquet odio mattis ac aliquet odio mattis et velit interdum, ac aliquet odio mattis.”',
            name: 'Alex Cathy',
            title: 'customer',
        },
        {
            image: img3,
            review: '“Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis et velit interdum, ac aliquet odio mattis ac aliquet odio mattis et velit interdum, ac aliquet odio mattis.”',
            name: 'Alex Cathy',
            title: 'customer',
        },
        {
            image: img,
            review: '“Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis et velit interdum, ac aliquet odio mattis ac aliquet odio mattis et velit interdum, ac aliquet odio mattis.”',
            name: 'Alex Cathy',
            title: 'customer',
        },
    ];

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="max-w-[95vw] mx-auto p-4 mb-[100px] background-img">
            <h3 className='text-center uppercase text-sm text-gray-700'>read reviews</h3>
            <h1 className='text-black text-center font1 text-4xl font-bold capitalize'>know what our customers say</h1>

            <div className="flex justify-center items-center mt-20 overflow-x-hidden">
                <div
                    className="flex transition-transform duration-500  "
                    style={{transform:`translateX(-${ currentSlide * 65 }%)`,
                    } }
                >                   
                 {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-none md:w-3/4 flex justify-center w-1/3 items-center"
                    >
                        <div className="flex px-8 flex-col items-center">
                            <div className={`p-4 px-8 md:3/4 w-full ${index % 2 === 0 ? 'bg-[#253241]' : 'bg-[#D9D9D9]'}`}>
                                <Starrating rating={0} />
                                <p className={`${index % 2 === 0 ? 'text-white' : 'text-black'} text-center `}>{slide.review}</p>
                            </div>
                            <div className='flex bg-slate-950 w-fit rounded-3xl space-x-3 mt-4 px-6 p-4'>
                                <p className="text-md font-bold font1 text-white">{slide.name} <br /> <span className='text-white'>{slide.title}</span></p>
                                <Image src={slide.image} alt={slide.name} className="rounded-full" />
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="flex justify-center mb-4 mt-24">
                {Array.from({ length: slides.length }, (_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 bg-gray-300 rounded-full mx-2 focus:outline-none ${currentSlide === index ? 'bg-orange-500' : ''}`}
                        onClick={() => handleSlideChange(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;


