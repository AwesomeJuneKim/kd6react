import React from 'react'
import { useState, useEffect } from 'react'
import Recoil2 from './Recoil2'

export default function Recoil() {
    const [cnt,setCnt]=useState(0)//틀린부분
    useEffect(()=>{
        console.log(cnt)
    },[cnt])
  return (
    <div className='w-ful h-full flex flex-col justify-center items-center text-lg font-bold'>
      Recoil1: {cnt}
      <Recoil2 cnt={cnt} setCnt={setCnt}/>
    </div>
  )
}
