import { FaHeart } from "react-icons/fa";

export default function MyList({title, imgUrl, content}) {
  return (
    <div className="flex flex-row border-2 rounded border-gray-500
                    w-full">
      <div className="w-1/3 max-w-48">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="w-3/4 h-auto">
        <h1 className="font-bold pl-3">{title}</h1>
        <p className="pl-3">{content}</p>
        </div>
      <div className="w-full flex justify-end mt-5 pr-3
                    text-red-700 items-baseline"><FaHeart/>
                    <span className="text-black font-bold">좋아요</span></div>
    </div>
  )
}
