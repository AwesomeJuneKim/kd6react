import MyDiv3 from "./MyDiv3";

export default function MyDiv2() {
  return (
    <div className="flex flex-col justify-center items-center 
                    border-4 border-[#C08497] bg-[#B0D0D3]
                    w-4/5 h-4/5">
      <p className="w-4/5 flex justify-start my-5
                    font-bold
                    text-[#FFFFFF]">div1 div2</p>
    <MyDiv3/>
    </div>
  )
}
