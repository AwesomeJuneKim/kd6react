import TailButton from '../ui/TailButton'
import { useNavigate } from 'react-router-dom'
export default function RouteNv() {
    const navigator= useNavigate();
  return (
    <div className='w-11/12 flex justify-center items-center font-bold'>
      <TailButton caption="Home" color="gray" handleClick={()=>{navigator("/")}}/>
      <TailButton caption="Page 1" color="gray" handleClick={()=>{navigator("/page1/:coffee")}}/>
      <TailButton caption="Page 2" color="gray" handleClick={()=>{navigator("/page2?item1=사과&item2=바나나")}}/>
    </div>
  )
}
