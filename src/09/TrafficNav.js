import TailButton from "../ui/TailButton"
export default function TrafficNav({title, category, sel, setSel}) {
    const handleBtClick=(item)=>{
        setSel(item);
    }
    const bts=category.map(item=>
        <TailButton key={item} caption={item} color={item===sel? "red":"blue"} handleClick={()=>handleBtClick(item)}/>
        );
  return (
    <div className="w-11/12 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        교통사고 {title}
      </h1>
      <div>
        {bts}
      </div>
    </div>
  )
}
