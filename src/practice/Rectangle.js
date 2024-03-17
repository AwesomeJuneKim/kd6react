import { FaHeart } from "react-icons/fa";

function Rectangle({imgUrl, title, content}) {
  return (
    <div className="border-2 border-gray-500">
        <div className="flex flex-row h-5/6">
          <div className="">
            <img src={imgUrl} alt={title} />
          </div>
          <div className="w-2/3 pl-3">
            <h1 className="font-bold">{title}</h1>
            <p>{content}</p>
          </div>
        </div>
          <span className="flex justify-end font-bold h-1/6">좋아요
            <span className="text-red-700"><FaHeart/></span>
          </span>
    </div>
  )
}

export default Rectangle
