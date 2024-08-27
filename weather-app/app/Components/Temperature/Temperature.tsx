"use client"
import { useGlobalContext } from '@/app/context/globalContext'
import { clearSky, cloudy, drizzeleIcon, navigation, rain, snow } from '@/app/utils/icons';
import { kelvinToCelsius } from '@/app/utils/misc';
import { time } from 'console';
import { Cog } from 'lucide-react';
import moment from 'moment';
import { format } from 'path';
import React, { useEffect, useState } from 'react'

function Temperature() {
    const {forecast} = useGlobalContext();
    const {main,timezone,name,weather}  = forecast;

    if(!forecast || !weather) {
        return <div> Loading ... </div>;
    }

    const temp = kelvinToCelsius(main?.temp);
    const mintemp = kelvinToCelsius(main?.temp_min);
    const maxtemp = kelvinToCelsius(main?.temp_max);

    const [localtime, setLocaltime] = useState<string>("");
    const [currentdate, setCurrentdate] =useState<string>("");

    const {main:weathermain, description} = weather[0];
    const getIcon = () => {
        switch (weathermain) {
            case "Drizzle":
              return drizzeleIcon;
            case "Rain":
              return rain;
            case "Snow":
              return snow;
            case "Clear":
              return clearSky;
            case "Clouds":
              return cloudy;
            default:
              return clearSky;
          }
    };

    useEffect(() => {
        //update time every second
        const interval = setInterval(()=>{
            const localMoment = moment().utcOffset(timezone/60);
            const formatedTime = localMoment.format("HH:mm:ss");
            const day = localMoment.format("dddd");
            setLocaltime(formatedTime);
            setCurrentdate(day);
        },1000);
    }, []);

  return (
    <div className='pt-6 pb-5 px-4 border rounded-lg flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none'>
        <p className='flex justify-between items-center'>
            <span className='font-medium'>{currentdate}</span>
            <span className='font-medium'>{localtime}</span>
        </p>
        <p className='pt-2 flex gap-1 font-bold'>
            <span>{name}</span>
            <span>{navigation}</span>
        </p>
        <p className='py-10 text-9xl self-center font-bold'>{temp}°</p>

        <div>
            <div>
                <span>{getIcon()}</span>
                <p className='pt-2 capitalize text-lg font-medium'>{description}</p>
            </div>
            <p className='flex items-center gap-2'>
                <span>Low: {mintemp}°</span>
                <span>High: {maxtemp}°</span>
            </p>
        </div>
    </div>
  )
}

export default Temperature