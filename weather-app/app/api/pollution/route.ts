import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try {
        const lat = 19.0760;
        const lon = 72.8777;
        const apikey = '5f28717f44a6feb80a70d161e50e03ad';
        const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apikey}`;

        const res = await axios.get(url);
        return NextResponse.json(res.data);
    } catch (error) {
        console.log("Error in getting pollution data", error);
        return new Response ("Error fetching pollution data", {status:500});
    }
}