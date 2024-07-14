import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const Blog = () => {
    return (
        <div className='mb-[100px]'>
            <section className="text-gray-600 body-font">
                <h3 className='text-center uppercase text-sm text-gray-700'>Our blogs</h3>
                <h1 className='text-black text-center font1 text-4xl font-bold'>What Our Author Post on Newsfeed</h1>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full   overflow-hidden">
                                <Image
                                    className="lg:h-64 md:h-36 rounded-xl w-full object-cover object-center"
                                    src={require('../../../public/assets/pics/download (13) 1.png')}
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-md  title-font font-medium text-orange-400 font1 mb-1">
                                        Nov 25,2023
                                    </h2>
                                    <h1 className="title-font text-2xl font-bold font1 text-gray-900 mb-3">
                                        Ultimate Mobility Solution
                                    </h1>
                                    <p className="leading-relaxed mb-3 text-gray-900">
                                        Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis et velit interdum, ac aliquet odio mattis ac aliquet odio mattis et velit interdum, ac aliquet odio mattis.            </p>
                                    <Button variant={'default'} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 font1 rounded-md mt-4 w-1/2">
                                        Read Now
                                    </Button>


                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full  overflow-hidden">
                                <Image
                                    className="lg:h-64 md:h-36 rounded-xl w-full object-cover object-center"
                                    src={require('../../../public/assets/pics/images (7) 1.png')}
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-md  title-font font-medium text-orange-400 font1 mb-1">
                                        Nov 25,2023
                                    </h2>
                                    <h1 className="title-font text-2xl font-bold font1 text-gray-900 mb-3">
                                        Ultimate Mobility Solution
                                    </h1>
                                    <p className="leading-relaxed mb-3 text-gray-900">
                                        Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis et velit interdum, ac aliquet odio mattis ac aliquet odio mattis et velit interdum, ac aliquet odio mattis.
                                    </p>
                                    <Button variant={'default'} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 font1 rounded-md mt-4 w-1/2">
                                        Read Now
                                    </Button>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full  overflow-hidden">
                                <Image
                                    className="lg:h-64 rounded-xl md:h-36 w-full object-cover object-center"
                                    src={require('../../../public/assets/pics/images (6) 1.png')}
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-md  title-font font-medium text-orange-400 font1 mb-1">
                                        Nov 25,2023
                                    </h2>
                                    <h1 className="title-font text-2xl font-bold font1 text-gray-900 mb-3">
                                        Ultimate Mobility Solution
                                    </h1>
                                    <p className="leading-relaxed mb-3y text-gray-900">
                                        Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis et velit interdum, ac aliquet odio mattis ac aliquet odio mattis et velit interdum, ac aliquet odio mattis.
                                    </p>
                                    <Button variant={'default'} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 font1 rounded-md mt-4 w-1/2">
                                        Read Now
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blog