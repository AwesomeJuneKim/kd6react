import { useRef, useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import TailSelect from "../ui/TailSelect"
import getcode from'./getcode.json'

export default function VilageFrcst() {
  const dt=useParams().dt;
  const area=useParams().area;
  const x=useParams().x;
  const y=useParams().y;
  const itemRef=useRef()
  const gubun='단기예보'
  const[selitem,setSelitem]=useState()
  const [selitemNm,setSelitemNm] =useState()
  const [vilage,setVilage]=useState([])
  const [vilcard, setVilcard]=useState([]);
  const ops= getcode.filter(item=>item["예보구분"]===gubun)
                        .map(item=>`${item["항목명"]}-${item["항목값"]}`)
  
  useEffect(()=>{
    let url=`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`
    url=`${url}serviceKey=${process.env.REACT_APP_APIKEY}`
    url=`${url}&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`
    console.log(url)

    fetch(url)
    .then(rsps=>rsps.json())
    .then(data=>setVilage(data.response.body.items.item))
    .catch(err=>console.log(err))
  },[])
  const handleItem=()=>{
    if(itemRef.current.value==''){
      alert('항목을 선택해 주세요.')
      itemRef.current.focus();
      return;
  }
  console.log(itemRef.current.value)
  setSelitemNm(itemRef.current.value.split('-')[0])
  setSelitem(itemRef.current.value.split('-')[1])
  }
  useEffect(()=>{
    if (!selitem) return;
    const tm=vilage.filter(item=>item.category===selitem)
        .map(item=>
        <tr className="hover:bg-slate-200" key={item.baseTime+item.baseDate}>
            <td>{`${item.baseDate.substring(0,4)}-${item.baseDate.substring(4,6)}-${item.baseDate.substring(6,8)}`}</td>
            <td>{`${item.baseTime.substr(0,2)}:${item.baseTime.substr(2,4)}`}</td>
            <td>{item.category}</td>
            <td>{`${item.fcstTime.substr(0,2)}:${item.fcstTime.substr(2,4)}`}</td>
            <td>{item.category==="T1H"? `${item.fcstValue}℃`:item.fcstValue}</td>
        </tr>
)
setVilcard(tm);
},[selitem]);
// useEffect(()=>{
//   const degree
// },[tm])
  return (
    <div className="w-11/12 h-full flex flex-col justify-start items-center shadow-md sm:rounded-lg">
        <div className="flex">
            <div className="font-extrabold text-lg m-4 text-gray-700">{`${dt.substring(0,4)}-${dt.substring(4,6)}-${dt.substring(6,8)} ${area}의 ${gubun}`}</div>
            <TailSelect ops={ops}
                        selRef={itemRef}
                        handleLocation={handleItem}
                        opDefault="---항목선택---"/>
        </div>
        <table className="w-full text-gray-500 text-sm text-center">
            <thead>
                <tr>
                    <th>예측날짜</th>
                    <th>예보시간</th>
                    <th>기상상태</th>
                    <th>예측시간</th>
                    <th>예측값</th>
                </tr>
            </thead>
            <tbody className="text-xs text-gray-700 bg-gray-50 text-center">
                {vilcard}
            </tbody>
        </table>
    </div>
  )
}
