import MyDiv3 from "./MyDiv3";

export default function MyDiv2({d1,db1,d2,d3}) {
  return (
    <div className="flex flex-col justify-center items-center 
                    border-4 border-[#C08497] bg-[#B0D0D3]
                    w-4/5 h-4/5">
      <p className="w-4/5 flex justify-start my-5
                    font-bold
                    text-[#FFFFFF]">{`${d1} next to ${d2}`}</p>
      <p className="w-4/5 flex justify-start mb-5
                    font-bold
                    text-[#FFFFFF]">{`${db1}`}</p>
    <MyDiv3 d11={d1} d21={d2} d31={d3}/>
    </div>
  )
}
