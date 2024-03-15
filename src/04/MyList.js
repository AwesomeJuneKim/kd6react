import { FaHeart } from "react-icons/fa";

export default function MyList({title, imgUrl, content}) {
  return (
    <div className="flex flex-row border-4 rounded border-[#C08497] bg-[#B0D0D3]
                    w-full">
      <div className=" max-w-48">
        <img src={imgUrl} alt="html" />
      </div>
      <div className="w-3/4 h-auto  text-white">
        <h1 className="font-bold">{title}</h1>
        <p>{content}</p>
        <div className="w-full flex justify-end mt-5
                        text-red-700 items-baseline"><FaHeart/>
                        <span className="text-black font-bold">좋아요</span></div>
      </div>
    </div>
  )
}
