import MyDiv2 from "./MyDiv2";
export default function MyDiv1() {
    const dname1='div1';
    const dbody1='This is a rectangle.'
    const dname2='div2';
    const dname3='div3';
  return (
    <div className="flex flex-col justify-center items-center 
                    border-4 border-[#C08497] bg-[#B0D0D3]
                    w-4/5 h-4/5">
      <p className="w-4/5 flex justify-start my-5
                    font-bold
                    text-[#FFFFFF]">My first {dname1}</p>
    <MyDiv2 d1={dname1} db1={dbody1} d2={dname2} d3={dname3}/>
    </div>
  )
}
