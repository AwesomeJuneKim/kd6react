import Rectangle from "./Rectangle";
import ExerData from "./Excercise.json"
function Practice1() {
  const myEx=ExerData.map(item=>
    <Rectangle title={item.title}
    imgUrl={item.imgUrl} 
    content={item.content} 
    key={item.title}
    />
    );
  return (
    <div className="grid grid-cols-2 gap-4">
      {myEx}
    </div>
  )
}

export default Practice1
