import React from 'react'
import { useState, useEffect } from 'react'

export default function Like() {
    const[cnt, setCnt]=useState(0);
    const handleUp=()=>{
        setCnt(cnt+1);
    }
    const handleDown=()=>{
        if(cnt!=0) setCnt(cnt-1);
    }
    useEffect(()=>{
        console.log("Like생성")
    },[]);
    useEffect(()=>{
        console.log("Like 업데이트",cnt)
    },[cnt]);

  return (
    <div>
      <span onClick={handleUp}>👍</span>
      {cnt}
      <span onClick={handleDown}>👎</span>

    </div>
  )
}
