import React from 'react'
import bank from './img/bank.png'
import market from './img/market.png'
import busan from './img/busan.png'
import { useState } from 'react'

export default function FoodCard({fObj}) {

    const fimg=fObj["구분"]==="기초푸드뱅크"? bank:
            fObj["구분"]==="기초푸드마켓"? market:busan

    const [isClick, setIsClick]=useState(false);
    // 초기값을 false로 지정하고 아래에서 클릭하면 반대가 되는 값을 지정해 준다.
    const handleClick=()=>{
        setIsClick(!isClick);
    }

  return (
    
    <div className='flex flex-row border-2 border-solid
                    w-11/12 justify-center items-center p-1 bg-white'>
        <img src={fimg} alt={bank} className='w-1/6 max-w-30 min-w-20'/>
        <div className='flex flex-col justify-center w-5/6 m-3'>
            <h1 className='text-2xl font-bold mb-1 text-slate-800'>{fObj.사업장명}</h1>
            <h3 className='text-l font-bold text-slate-600'>{fObj['운영주체명']}</h3>
            <h5 className='text-sm text-slate-400'>{fObj['사업장 소재지']}</h5>
            <div className='w-full text-white bg-slate-600 mt-5 p-2 truncate
                            flex justify-center items-center text-sm' onClick={handleClick}>
                {isClick &&`Tel: ${fObj['연락처(대표번호)']}, Fax: ${fObj['팩스번호']}`}
                {!isClick &&`클릭해주세요`}
                </div>
        </div>
    </div>
  )
}
