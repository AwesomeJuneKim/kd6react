import TailInput from "../ui/TailInput"
import TailButton from "../ui/TailButton"
import {useRef} from "react"
export default function RefInput() {
    const inputRef=useRef();

    const handleAdd=()=>{
        if(inputRef.current.value ===''){
            alert('값을 입력해주세요.');
            inputRef.current.focus();
        }
        console.log(inputRef.current.value)//input박스에는 value값을 가져올 수 있다.
    }
    const handleRemove=()=>{}
  return (
    <div className="w-11/12 flex flex-col
                    justify-center items-center">
        <div className="w-full flex
                        justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
        <div>
      <input type="text"
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
                        placeholder="값 입력"/>
    </div>
        </div>
        
        <div className="w-1/2 flex justify-center items-center">
        <TailButton caption="등록" color="blue" handleClick={handleAdd}/>
        <TailButton caption="취소" color="red" handleClick={handleRemove}/>
        </div>
        </div>
    </div>
  )
}
