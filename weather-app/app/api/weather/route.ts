import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
require('dotenv').config();

export async function GET(req:NextRequest){
    try {
        const lat = 19.0760;
        const lon = 72.8777;
        // const apikey = process.env.OPENWEATHERMAP_API_KEY;
        const apikey = '5f28717f44a6feb80a70d161e50e03ad'
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apikey}`

        const res = await axios.get(url);
        return NextResponse.json(res.data);
         
    } catch(error) {
        console.log("Error fetching forecast data",error);

        return new Response("Error fetching forecast data", {status:500});
    }
}