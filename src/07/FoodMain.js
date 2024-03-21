import fdata from './fooddata.json'
import FoodCard from './FoodCard'
import TailButton from '../ui/TailButton'
import { useState } from 'react'

export default function FoodMain() {
    // consol.log(fdata)
    
    const [cards,setCards]=useState([]);
    let c1= fdata.map(item=>
        item["운영주체 분류"]);
        c1=new Set(c1);
        c1=[...c1];//map을 하려면 오브젝트에 적용 불가하므로 리스트로 바꾼다.
        console.log(c1)
    const c1Bts=c1.map(item=>
        <TailButton key={item} caption={item} color='blue' handleClick={()=>handleList(item)}/>
        )
    const handleList=(citem)=>{
        console.log(citem)
        const tm=fdata.filter(item=> item["운영주체 분류"]===citem)
        .map(item=>
        <FoodCard fObj={item} key={item.사업장명} />
        );
        setCards(tm);
    
    }

  return (
    <>
    <div className='w-full flex justify-center items-center p-5 bg-blue-100'>
      {c1Bts}
    </div>
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 bg-blue-100">
      {cards}
    </div>
    </>
  )
}
