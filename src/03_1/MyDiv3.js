export default function MyDiv3(probs) {
  return (
    <div className="flex flex-col justify-center items-center p-5
                    border-4 border-[#C08497] bg-[#B0D0D3]
                    w-3/5 h-3/5">
      <p className="w-4/5 flex justify-start
                    font-bold
                    text-[#FFFFFF]">{`${probs.d1} > ${probs.d2}> ${probs.d3}`}</p>
    </div>
  )
}
