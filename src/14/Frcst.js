import TailSelect from "../ui/TailSelect"
import TailInput from "../ui/TailInput"
import TailButton from "../ui/TailButton"
import { useState,useEffect,useRef } from "react"
import getxy from './getxy.json'
import { useNavigate } from "react-router-dom"
export default function Frcst() {
    const dRef=useRef();
    const sRef=useRef();
    const [x,setX]=useState();
    const [y,setY]=useState();
    const [dt,setDt]=useState();
    const [area,setArea]=useState();
    const navigator=useNavigate();

    const handleDate=()=>{
        console.log(dRef.current.value)
        setDt(dRef.current.value.replaceAll('-',''))
    }
    const ops=getxy.map(item=>item["1단계"])
    console.log(ops)

    const handleArea=()=>{
        if(sRef.current.value===''||sRef.current.value===undefined){
            return
        }
        // console.log(sRef.current.value)
        let tm=getxy.filter(item=>item['1단계']===sRef.current.value)
        console.log(tm[0])
        setArea(sRef.current.value)
        setX(tm[0]["격자 X"]);
        setY(tm[0]["격자 Y"]);
    }
    useEffect(()=>{
        console.log({x})
        console.log({y})
    },[sRef]);
    //초단기예보, navigate를 이용한다
    const handleFrcst=(loc)=>{
        if(dt===''||dt===undefined){
            alert('날짜를 선택해주세요.')
            dRef.current.focus();
            return
        }
        if(area===''||area===undefined){
            alert('지역을 선택해주세요.')
            dRef.current.focus();
            return
        }
        // navigator(`/${loc}/${dt}/${area}/${x}/${y}`)//헷갈리는 부분
        let gubun='';
        if (loc==='ultra') gubun='초단기예보'
        else gubun='단기예보'
        navigator(`/flist?dt=${dt}&area=${area}&x=${x}&y=${y}&gubun=${gubun}`)//쿼리스트링으로 바꿔서 전달
    }

  return (
    <div className="w-11/12 justify-start grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
        <div>
            <TailInput type="date"
                        inputRef={dRef}
                        ph="날짜선택" 
                        handleChange={handleDate}/>
        </div>
        <div>
            <TailSelect ops={ops}
                        selRef={sRef}
                        handleLocation={handleArea}
                        opDefault="---지역선택---"/>
                        </div>
        <div>
            <TailButton caption="초단기예보"
                        color="blue"
                        handleClick={()=>{handleFrcst('ultra')}}/>
        </div>
        <div>
            <TailButton caption="단기예보"
                        color="blue"
                        handleClick={()=>{handleFrcst('vilage')}}/>
                        </div>
    </div>
  )
}
