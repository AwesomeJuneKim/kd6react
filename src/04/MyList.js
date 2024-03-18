import { FaHeart } from "react-icons/fa";

export default function MyList({title, imgUrl, content}) {
  let cnt=0;
  const handleLike=(t)=>{
    console.log('handleLike'+t)
    cnt=cnt+1;
    console.log(`cnt=${cnt}`)
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
                        <span>{cnt}</span>
        </div>
      </div>
    </div>
  )
}
