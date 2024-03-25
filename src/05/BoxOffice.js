import BoxOfficeData from './BoxOffice.json'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";
import { useState,useEffect,useRef } from 'react';
import TailInput from'../ui/TailInput';




export default function BoxOffice() {
    const [Mcontent,setMcontent]= useState();
    const boxRef=useRef();

    const handleClick=(mv)=>{
        console.log(mv)
        setMcontent(mv)
    }
    const boxlist=BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
    const myBoxList=boxlist.map(item=>(
        <tr key={item.movieNm} className='h-10 p-1 hover:bg-slate-100 hover:font-bold'
        onClick={()=>{handleClick(item)}}>
            <td className='text-center'><span className='inline-flex w-11/12  bg-gray-200 p-1 justify-center items-center'>{item.rank}</span></td>
            <td>{item.movieNm}</td>
            <td>{parseInt(item.salesAmt).toLocaleString()}</td>
            <td className='w-1/5 text-center'>{parseInt(item.audiCnt).toLocaleString()}명</td>
            <td className='w-20 inline-flex text-center justify-center items-center'><span className='w-8'>{parseInt(item.rankInten)===0? <CgLoadbar />
                                                : parseInt(item.rankInten)>0 ? <FaArrowUp className='text-red-600'/>
                                                : <FaArrowDown className='text-blue-600'/>}</span>
                                                {parseInt(item.rankInten) !==0 && Math.abs(item.rankInten)}
                                                </td>
        </tr>
    ));
    const handleSelDate=()=>{
      console.log(boxRef.current.value);
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className='w-4/5 flex justify-end items-center'>
          <span className='flex justify-center items-center px-2 text-sm font-bold'>날짜 선택 </span>
          {/* 날짜변경에 onChange를 걸 수 있음 */}
          <TailInput type="date"
                        inputRef={boxRef}
                        handleChange={handleSelDate}
                        ph=""/>
      </div>
      <table className="w-4/5 border">
        <thead>
            <tr className='h-10 text-center bg-blue-200 text-blue-950
                            font-bold'>
                <td className='w-10'>순위</td>
                <td>영화명</td>
                <td>매출액</td>
                <td className='w-1/5'>관객수</td>
                <td className='w-20'>증감율</td>
            </tr>
        </thead>
        <tbody>
            {myBoxList}
        </tbody>
      </table>
        <div className='w-4/5 bg-blue-500 h-10 text-center text-white p-2'>
            {Mcontent === undefined &&'영화를 선택해 주세요.'}
            {Mcontent &&
            `[ ${Mcontent.rank}위 ] ${Mcontent.movieNm} :
            누적관객수: ${parseInt(Mcontent.audiCnt).toLocaleString()}명`}</div>
    </div>
  )
}
