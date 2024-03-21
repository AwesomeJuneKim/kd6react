import {useState, useEffect} from "react"
function MyClockTime(){
    // const currentTime=new Date();
    const[currentTime, setCurrentTime] =useState();
    const[tm,setTm]=useState(0);

    useEffect(()=>{
        //인수가 없는경우에 바뀔때 마다 찍는다???
        setTm(tm+1);
        console.log("[]=>",currentTime,tm)
    },[]);//[]가 있는경우 한번만 찍는다???->렌더링이 일어날 때 마다 실행 됨
    useEffect(()=>{
        // setTm(tm+1);
        console.log("[tm]=>",currentTime,tm)
    },[tm]);//tm이 바뀔때 찍고 싶음->tm이 0으로 한번 초기화 되었으므로 tm이 변경되었다고 인식되어 1번 더 실행된다([tm]=>1이 된다.한번더 실행된다.)

    return (
        <h1 className="font-bold text-2xl">
            {/* 현재시각 : 
            {currentTime.toLocaleTimeString()} */}
        </h1>
    );
}
export default MyClockTime;

