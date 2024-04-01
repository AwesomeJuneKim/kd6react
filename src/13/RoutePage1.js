import { useParams } from "react-router-dom"
export default function RoutePage1() {
    const pr=useParams().coffee;
  return (
    <div>
      RoutePage1 {pr}
    </div>
  )
}
