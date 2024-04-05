// import BoxOfficeData from './BoxOffice.json'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";
import { useState,useEffect,useRef } from 'react';
import TailInput from'../ui/TailInput';

export default function BoxOffice() {
    const boxRef=useRef();
    const [boxlist,setBoxlist]=useState();//박스오피스 json데이터 저장
    const [trs,setTrs]=useState();
    const [Mcontent,setMcontent]= useState();
    const handleClick=(mv)=>{
      console.log(mv)
      setMcontent(mv)
  }

    //boxoffice데이터 페치
    const getData=(dt)=>{
      let url=`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
      url=url+`key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`
      console.log(url)
      fetch(url)//url에 파일요청 후 기다리지 않고 다른것을 하고 있음(비동기방식)
      .then(resp=>resp.json())//데이터를 받은 후json파일로 만듦
      .then(data=>setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))//갖고온 데이터를 필요한 만큼만 스테이트변수에 저장
      .catch(err=>console.log(err))
    }

    const handleSelDate=()=>{
      console.log(boxRef.current.value.replaceAll('-',''));
      getData(boxRef.current.value.replaceAll('-',''));
    }
    useEffect(()=>{//boxlist가 변할 때마다 화면을 그려주면 된다.
      if(!boxlist) return;
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
    setTrs(myBoxList)
    },[boxlist]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className='w-4/5 flex justify-end items-center py-2'>
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
            {trs}
        </tbody>
      </table>
      <div className='w-4/5 bg-blue-500 h-10 text-center text-white p-2'>
            {Mcontent === undefined &&'영화를 선택해 주세요.'}
            {Mcontent &&
            `[ ${Mcontent.rank}위 ] ${Mcontent.movieNm} :
            누적관객수: ${parseInt(Mcontent.audiAcc).toLocaleString()}명`}
            </div>
    </div>
  )
}
