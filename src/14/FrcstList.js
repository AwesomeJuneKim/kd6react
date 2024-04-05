import { useSearchParams } from "react-router-dom"
export default function FrcstList() {
    const[queryParams]=useSearchParams();
    const dt=queryParams.get('dt');
    const area=queryParams.get('area');
    const x=queryParams.get('x');
    const y=queryParams.get('y');
    const gubun=queryParams.get('gubun');
    console.log(dt,area,x,y,gubun);
  return (
    <div>
      
    </div>
  )
}
