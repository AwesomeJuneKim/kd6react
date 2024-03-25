import { useState,useEffect,useRef } from 'react';
import TailButton from '../ui/TailButton'
export default function RefVal() {
    let cnt=0;                          //컴포넌트 변수
    const [stCnt, setStCnt]= useState(0);//state변수
    const refCnt=useRef(0);             //ref변수
    //버튼을 누르면 각각의 값이 증가되게 만듦

    const handleLocal=()=>{
        cnt=cnt+1;
        console.log('cont=',cnt);
    }
    const handleState=()=>{
        setStCnt(stCnt+1);
        console.log('stCnt1=',stCnt);//1+ 는 버튼을 1번누르면 0로 표시되며(초기값이 0이므로) 세터와 동기화되지 않음
    }
    const handleRef=()=>{
        refCnt.current=refCnt.current+1;
        console.log('refCnt.current=',refCnt.current); 
        //2+바로 렌더링되는게 아니고 변수를 갖고 있다가 화면이 렌더링될때 한번에 바뀐다(렌더링을 state변수에 걸었으므로 state변수를 렌더링할 때 변함)
        //2+폼태그를 갖고올 때 주로 사용함
    }

    useEffect(()=>{
        console.log('stCnt2=',stCnt)
    },[stCnt]);//1+ setStCnt가 바뀔때 마다 실행되므로 버튼을 누른 순간 1이 된다.
  return (
    <div className="w-10/12 grid grid-cols-3 gap-4
                    text-center">
      <div>
        컴포넌트변수(지역변수):{cnt}
      </div>
      <div>
        State 변수:{stCnt}
      </div>
      <div>
        Ref 변수:{refCnt.current}
        {/* ref변수그대로 쓰면 오류나고 .current를 붙여줘야 함 */}
      </div>
      <div>
        <TailButton caption="컴포넌트 변수" color="blue" handleClick={handleLocal}/>
      </div>
      <div>
      <TailButton caption="State 변수" color="red" handleClick={handleState}/>

      </div>
      <div>
      <TailButton caption="Ref 변수" color="green" handleClick={handleRef}/>

      </div>
    </div>
  )
}
