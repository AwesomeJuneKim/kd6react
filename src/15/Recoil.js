import React from 'react'
import Recoil2 from './Recoil2'
import { useRecoilValue } from 'recoil'
import { rcnt } from './RecoilAtom'

export default function Recoil() {
    const cnt=useRecoilValue(rcnt);
  return (
    <div className='w-ful h-full flex flex-col justify-center items-center text-lg font-bold'>
      Recoil1: {cnt}
      <Recoil2 />
    </div>
  )
}
