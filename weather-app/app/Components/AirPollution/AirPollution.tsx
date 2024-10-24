"use client";
import { useGlobalContext } from '@/app/context/globalContext';
import { thermo } from '@/app/utils/icons';
import { Skeleton } from '@/components/ui/skeleton';
import { CloudCog } from 'lucide-react';
import React from 'react'

function AirPollution() {
    const {airQuality} = useGlobalContext();

    if(
        !airQuality || 
        !airQuality.list || 
        !airQuality.list[0] ||
        !airQuality.list[0].main
    ){
        return <Skeleton className='h-[12rem] w-full col-span-2 md:col-span-full'/>
    }
  return (
    <div className='air-pollution col-span-full sm-2:col-span-2 pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none'>       
        <h2 className='flex items-center gap-2 font-medium'>
            {thermo} Air Pollution 
        </h2>
    </div>
  )
}

export default AirPollution