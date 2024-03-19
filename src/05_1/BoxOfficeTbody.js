import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";


export default function BoxOfficeTbody({boxlist, setMcontent}) {
    const handleClick=(mv)=>{
        console.log(mv)
        setMcontent(mv)
    }
    const myBoxList=boxlist.map(item=>(
        <tr key={item.movieNm} className='h-10 p-1 hover:bg-slate-100 hover:font-bold'
        onClick={()=>{handleClick(item)}}>
            <td className='text-center'><span className='inline-flex w-11/12  bg-gray-200 p-1 justify-center items-center'>{item.rank}</span></td>
            <td>{item.movieNm}</td>
            <td>{parseInt(item.salesAmt).toLocaleString()}</td>
            <td className='w-1/5 text-center'>{parseInt(item.audiCnt).toLocaleString()}명</td>
            <td className='w-20 inline-flex text-center justify-center items-center'><span className='w-8'>{parseInt(item.rankInten)===0? <CgLoadbar />
                                                : parseInt(item.rankInten)>0 ? <FaArrowUp className='text-red-600'/>
                                                : <FaArrowDown className='text-blue-600'/>}</span>
                                                {parseInt(item.rankInten) !==0 && Math.abs(item.rankInten)}
                                                </td>
        </tr>
    ));
    return (
    <tbody>
        {myBoxList}
    </tbody>
  )
}
