import { BrowserRouter,Routes,Route } from "react-router-dom"
import RouteHome from "./RouteHome"
import RouteNv from "./RouteNv"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
export default function RouteMain() {//라우팅에 대한 정보를 저장하는 컴포넌트
  return (
    <BrowserRouter>
    <div className="w-full h-full flex flex-col justify-start items-center">
    {/* 중복으로 나타낼 부분은 Routes바깥에 적는다 */}
    <RouteNv />
      <Routes>
        <Route path="/" element={<RouteHome/>} />
        <Route path="/page1/:coffee" element={<RoutePage1/>} />
        <Route path="/page2" element={<RoutePage2/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}
