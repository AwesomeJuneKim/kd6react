
export default function TailBall({n}) {
    const bColor=[
        'bg-red-300','bg-green-300','bg-blue-300','bg-orange-300','bg-purple-300'
    ]
    const ballColor=`w-16 h-16 rounded-full flex justify-center items-center m-1
    ${bColor[parseInt(n/10)]} text-white font-bold text-xl`

  return (
    <div className={ballColor}>
      {n}
    </div>
  )
}
