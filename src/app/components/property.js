"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LiaCompressArrowsAltSolid, LuBedDouble, LuBath } from '../assets/icons/vander';

const fetchProperties = async () => {
  try {
    const response = await fetch('/api/properties');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch properties:', error);
    return [];
  }
};

export default function Property() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPropertiesData();
  }, []);

  const fetchPropertiesData = async () => {
    const data = await fetchProperties();
    setProperties(data);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container lg:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Properties</h3>
        <p className="text-slate-400 max-w-xl mx-auto">A great platform to buy, sell, and rent your properties without any agents or commissions.</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
        {properties.map((item) => (
          <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500" key={item.id}>
            <div className="relative">
              <Image src={item.image} alt={item.name} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} priority />
              <div className="absolute top-4 end-4">
                <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600">
                  <i className="mdi mdi-heart mdi-18px"></i>
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="pb-6">
                <Link href={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</Link>
              </div>
              <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                <li className="flex items-center me-4">
                  <LiaCompressArrowsAltSolid className="me-2 text-green-600" />
                  <span>{item.square} sqf</span>
                </li>
                <li className="flex items-center me-4">
                  <LuBedDouble className="me-2 text-green-600" />
                  <span>{item.beds} Beds</span>
                </li>
                <li className="flex items-center">
                  <LuBath className="me-2 text-green-600" />
                  <span>{item.baths} Baths</span>
                </li>
              </ul>
              <ul className="pt-6 flex justify-between items-center list-none">
                <li>
                  <span className="text-slate-400">Price</span>
                  <p className="text-lg font-medium">${item.price}</p>
                </li>
                <li>
                  <span className="text-slate-400">Rating</span>
                  <ul className="text-lg font-medium text-amber-400 list-none">
                    {[...Array(5)].map((_, index) => (
                      <li key={index} className="inline ms-1">
                        <i className={`mdi mdi-star ${index < item.rating ? 'text-amber-400' : 'text-slate-300'}`}></i>
                      </li>
                    ))}
                    <li className="inline ms-1 text-black dark:text-white">({item.rating})</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
