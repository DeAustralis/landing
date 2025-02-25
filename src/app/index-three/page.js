import React from "react";
import Link from "next/link";
import Image from "next/image";

import { counterData, propertiesDetails } from "../data/data";

import Navbar from "../components/navbar";
import Switcher from "../components/switcher";
import Footer from "../components/footer";
import Team from "../components/team";
import Client from "../components/client";
import GetInTuch from "../components/get-in-touch";
import Counter from "../components/counter";

import { LiaCompressArrowsAltSolid, LuBedDouble, LuBath, FiSearch, FiArrowRight} from '../assets/icons/vander'

export default function IndexThree(){
    return(
        <> 
         <Navbar/>
         <div className="container-fluid relative mt-20">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: "0" }} className="w-full h-[500px]" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="container relative -mt-[25px]">
                <div className="grid grid-cols-1">
                    <div className="subcribe-form z-1">
                        <form className="relative max-w-2xl mx-auto">
                            <FiSearch className="w-5 h-5 absolute top-[47%] -translate-y-1/2 start-4" />
                            <input type="name" id="search_name" name="name" className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ps-12" placeholder="City, Address, Zip :" />
                            <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                        {propertiesDetails.map((item, index) => (
                            <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 w-full mx-auto lg:max-w-2xl">
                                <div className="md:flex">
                                    <div className="relative md:shrink-0">
                                        <Image className="h-full w-full object-cover md:w-48" src={item.image} alt="" width={192} height={257} priority />
                                        <div className="absolute top-4 end-4">
                                            <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="md:pb-4 pb-6">
                                            <Link href={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">10765 Hillshire Ave, Baton Rouge, LA 70810, USA</Link>
                                        </div>

                                        <ul className="md:py-4 py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                            <li className="flex items-center me-4">
                                                <LiaCompressArrowsAltSolid width={20} className=" me-2 text-green-600"/>
                                                <span>{item.square}sqf</span>
                                            </li>

                                            <li className="flex items-center me-4">
                                                <LuBedDouble width={20} className=" me-2 text-green-600"/>
                                                <span>{item.beds} Beds</span>
                                            </li>

                                            <li className="flex items-center">
                                                <LuBath width={20} className=" me-2 text-green-600"/>
                                                <span>{item.baths} Baths</span>
                                            </li>
                                        </ul>

                                        <ul className="md:pt-4 pt-6 flex justify-between items-center list-none">
                                            <li>
                                                <span className="text-slate-400">Price</span>
                                                <p className="text-lg font-medium">${item.price}</p>
                                            </li>

                                            <li>
                                                <span className="text-slate-400">Rating</span>
                                                <ul className="text-lg font-medium text-amber-400 list-none">
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1 text-black dark:text-white">{item.rating}(30)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="md:flex justify-center text-center mt-6">
                        <div className="md:w-full">
                            <Link href="/list" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">View More Properties <FiArrowRight width={18} className="ms-1"/></Link>
                        </div>
                    </div>
                </div>
                <div className="container lg:mt-24 mt-16 lg:pt-24 pt-16">
                    <div className="absolute inset-0 opacity-25 dark:opacity-50  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/map.png')"}}></div>
                    <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Trusted by more than 10K users</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>

                    <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                        {counterData.map((item,index) =>{
                            return(
                                <div className="counter-box text-center" key={index}>
                                    <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white">
                                        <Counter start={0} end={item.target}/>+</h1>
                                    <h5 className="counter-head text-lg font-medium">{item.title}</h5>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Team/>
                <Client />
               <GetInTuch/>

            </section>
            <Footer/>
            <Switcher/>
        </>
    )
}