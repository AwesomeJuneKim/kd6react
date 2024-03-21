import {useState, useEffect} from "react"
function MyClockTime(){
    // const currentTime=new Date();
    const[currentRime, setCurrentTime] =useState();

    return (
        <h1 className="font-bold text-2xl">
            {/* 현재시각 : 
            {currentTime.toLocaleTimeString()} */}
        </h1>
    );
}
export default MyClockTime;

