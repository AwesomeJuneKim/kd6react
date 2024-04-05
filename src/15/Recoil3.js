import TailButton from "../ui/TailButton"
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil"
import { rcnt } from "./RecoilAtom"

export default function Recoil3() {
    // const cnt=useRecoilValue(rcnt)
    // const setCnt=useSetRecoilState(rcnt)
    //위의 형태를 아래의 한줄로 바꿀 수 있음
    const[cnt,setCnt]=useRecoilState(rcnt)
    
    const handleUp=()=>{
        setCnt(cnt+1)
    }
    
  return (
    <div>
        Recoil3
      <div>
      <TailButton caption="증가"
                color="blue"
                handleClick={handleUp}/>
        </div>
    </div>
  )
}
