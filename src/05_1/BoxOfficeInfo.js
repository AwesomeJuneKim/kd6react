
export default function BoxOfficeInfo({Mcontent}) {
  return (
    <div className='w-4/5 bg-blue-500 h-10 text-center text-white p-2'>
            {Mcontent === undefined &&'영화를 선택해 주세요.'}
            {Mcontent &&
            `[ ${Mcontent.rank}위 ] ${Mcontent.movieNm} :
            누적관객수: ${parseInt(Mcontent.audiAcc).toLocaleString()}명`}</div>
  )
}
