import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function MyList({title, imgUrl, content}) {
  let cnt=0;

  //state변수 생성 대괄호로 만들어야 함 변수명은 아무거나 setStCnt는 변수를 바꾸는 함수명
  const[stCnt, setStCnt]=useState(0);//컴포넌트의 초기값 0으로 초기화

  const handleLike=(t)=>{
    console.log('handleLike'+t)
    cnt=cnt+1;
    console.log(`cnt=${cnt}`)
    setStCnt(stCnt+1);
  }
  return (
    <div className="flex flex-row border-2 rounded border-gray-500
                    w-full">
      <div className="w-1/3 max-w-48">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="w-3/4 h-auto">
        <div className="h-4/6">
          <h1 className="font-bold pl-3">{title}</h1>
          <p className="pl-3">{content}</p>
        </div>
        
        <div className="w-full flex justify-end mt-5 pr-3 h-2/6
                        items-baseline" onClick={()=>{handleLike(title)}}>
                        <FaHeart className=" text-red-700 hover:text-black"/>
                        <span className="font-bold">좋아요</span>
                        <span>{stCnt}</span>
        </div>
      </div>
    </div>
  )
}
