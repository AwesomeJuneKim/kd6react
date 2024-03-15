export default function MyDiv3({d11,d21,d31}) {
  return (
    <div className="flex flex-col justify-center items-center p-5
                    border-4 border-[#C08497] bg-[#B0D0D3]
                    w-3/5 h-3/5">
      <p className="w-4/5 flex justify-start
                    font-bold
                    text-[#FFFFFF]">{`${d11} > ${d21}`}</p>
      <p className="w-4/5 flex justify-start
                    font-bold
                    text-[#FFFFFF]">{`${d31}`}</p>
    </div>
  )
}
