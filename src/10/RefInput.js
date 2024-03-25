import TailInput from "../ui/TailInput"
import TailButton from "../ui/TailButton"
import {useEffect, useRef, useState} from "react"
export default function RefInput() {
    const inputRef=useRef();
    const [bts, setBts]=useState([]);//입력값을 배열에 저장하고 버튼으로 만들어 줌
    const[tags, setTags]=useState([]);//만들어진 버튼을 출력 함

    const handleAdd=()=>{
        if(inputRef.current.value ===''){
            alert('값을 입력해주세요.');
            inputRef.current.focus();
            return;
        }
        console.log(inputRef.current.value)//input박스에는 ref의 value값을 가져올 수 있다.
        setBts([...bts, inputRef.current.value]);
    }
    const handleRemove=()=>{
        setBts([]);
        inputRef.current.focus();
    }
    useEffect(()=>{
        inputRef.current.value='';
        inputRef.current.focus();
        let tm=bts.map((item,idx)=>
        <TailButton caption={item} key={`bt${idx}`} color="red"/>)
        setTags(tm);
    },[bts]);
  return (
    <div className="w-11/12 flex flex-col
                    justify-center items-center">
        <div className="w-full flex
                        justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
        <div>
      {/* <input type="text"
                ref={inputRef}
                id="first_name"
                className="border border-gray-300
                        bg-gray-50 
                        text-gray-90
                        text-sm rounded-lg
                        focus:outline-none focus:ring
                        focus:ring-blue-500
                        focus:border-blue-500
                        block w-full p-2.5"
                        placeholder="값 입력"/> */}
        <TailInput type="text"
                    inputRef={inputRef}
                    ph="값 입력"/>
    </div>
        </div>
        
        <div className="w-1/2 flex justify-center items-center">
        <TailButton caption="등록" color="blue" handleClick={handleAdd}/>
        <TailButton caption="삭제" color="red" handleClick={handleRemove}/>
        </div>
        </div>
        <div>{tags}</div>
    </div>
  )
}
