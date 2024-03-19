import TailButton from "../ui/TailButton"
import TailBall from "../ui/TailBall"
import { useState } from "react"
export default function Lotto() {
    
    const handleLottoClick=(nb)=>{
        console.log('handleLottoClick')
        setmNb(nb)
    }
    
    const lottoNum=[];
    while(lottoNum.length<7){
        let n=Math.floor(Math.random()*45)+1
        if(!lottoNum.includes(n)) lottoNum.push(n)
    }
    lottoNum.splice(6,0,<span className="text-black text-4xl font-bold">+</span>);
    const ballNum=lottoNum.map((n,i)=>(
      <TailBall key={i} n={n}/>
    ));
    
    const[mNb, setmNb]=useState();
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex">
        {ballNum}</div>
        {/* <TailBall key={i} n={n}/> */}
        {/* <TailBall n={10}/>
        <TailBall n={20}/>
        <TailBall n={30}/>
        <TailBall n={45}/> */}
        <div>
      <TailButton caption='로또번호생성' color='red' handleClick={handleLottoClick}/></div>
    </div>
  )
}
