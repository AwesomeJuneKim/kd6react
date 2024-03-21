import {useState, useEffect} from "react"
function MyClockTime(){
    // const currentTime=new Date();
    const[currentTime, setCurrentTime] =useState(new Date);

    useEffect(()=>{
        //인수가 없는경우에 바뀔때 마다 찍는다???
        const t= setInterval(()=>{
            setCurrentTime(new Date);
        },1000);
        console.log("[]=>",currentTime)
        return(()=>{clearInterval(t)});
    },[]);

    return (
        <h1 className="font-bold text-2xl">
            {currentTime&& `현재시각 : 
            ${currentTime.toLocaleTimeString()}`}
        </h1>
    );
}
export default MyClockTime;

