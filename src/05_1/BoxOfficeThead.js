
export default function BoxOfficeThead() {
  return (
    <thead>
            <tr className='h-10 text-center bg-blue-200 text-blue-950
                            font-bold'>
                <td className='w-10'>순위</td>
                <td>영화명</td>
                <td>매출액</td>
                <td className='w-1/5'>관객수</td>
                <td className='w-20'>증감율</td>
            </tr>
        </thead>
  )
}
