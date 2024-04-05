import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import './App.css';
// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello';
// import MyClock from './01_1/MyClock';
// import HelloCss from './02/HelloCss';
import { ImAppleinc } from "react-icons/im";
// import MyDiv1 from "./03_1/MyDiv1";
// import MyListMain from"./04/MyListMain";
// import Practice1 from "./practice/Practice1";
// import BoxOfficeTb from "./05_1/BoxOfficeTb";
// import BoxOfficeMain from "./05/BoxOfficeMain";
// import Like from "./practice/Like";
import Lotto from "./06/Lotto";
// import FoodCard from "./07/FoodCard";
import MyClock from "./08/MyClock";
import FoodMain from "./07/FoodMain";
// import TrafficMain from "./09/TrafficMain";
// import RefVal from "./10/RefVal";
// import RefInput from "./10/RefInput";
import BoxOffice from "./05/BoxOffice";
// import GalleryCard from "./11/GalleryCard";
import GalleryMain from "./11/GalleryMain";
import FestivalMain from "./11/FestivalMain";
// import RouteMain from "./13/RouteMain";
import Frcst from "./14/Frcst";
import UltraSrtRcst from "./14/UltraSrtRcst";
import VilageFrcst from "./14/VilageFrcst";
import FrcstList from "./14/FrcstList";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="flex flex-col 
                      w-full max-w-screen-xl
                      h-screen
                      mx-auto
                      overscroll-y-auto">
        {/* <MainHeader /> */}
        {/* <MainHeader />
        <MainHeader /> */}
      {/* <Hello />
      <Hello />
      <Hello /> */}
      {/* <MyClock /> */}
      {/* <HelloCss /> */}
        <header className="flex justify-between items-center
                          h-20
                          p-10
                          text-xl font-bold text-white
                          bg-[#6ABEA7]
                          scroll-auto">
          <div>리액트 실습</div>
          <div className="flex justify-end items-center">
          <div className="p-2 hover:text-green-950 m-2">
              <Link to="/boxoffice">Movie</Link>
            </div>
          <div className="p-2 hover:text-green-950 m-2">
              <Link to="/lotto">Lotto</Link>
            </div>
          <div className="p-2 hover:text-green-950 m-2">
              <Link to="/gallery">Gallery</Link>
            </div>
          <div className="p-2 hover:text-green-950 m-2">
              <Link to="/festival">Festival</Link>
            </div>
          <div className="p-2 hover:text-green-950 m-2">
              <Link to="/foodmarket">FoodMarket</Link>
            </div>
          <div className="p-2 hover:text-green-950 m-2">
              <Link to="/forecast">Forecast</Link>
            </div>
            
            <div className='pl-2 text-5xl text-green-950 hover:text-white'>
              <Link to="/"><ImAppleinc /></Link>
          </div>
          </div>
          </header>
        <main className="grow flex flex-col justify-center items-center">
          {/* <HelloCss /> */}
          {/* <MyDiv1 /> */}
          {/* <MyListMain /> */}
          {/* <Practice1 /> */}
          {/* <BoxOfficeTb /> */}
          {/* <BoxOffice/> */}
          {/* <BoxOfficeMain/> */}
          {/* <Lotto /> */}
          {/* <Like /> */}
          {/* <FoodCard /> */}
          {/* <MyClock /> */}
          {/* <TrafficMain/> */}
          {/* <RefVal/> */}
          {/* <RefInput/> */}
          {/* <GalleryCard /> */}
          {/* <GalleryMain/> */}
          {/* <FestivalMain/> */}
          {/* <RouteMain/> */}
          <Routes>
            <Route path="/" element={<MyClock/>} />
            <Route path="/lotto" element={<Lotto/>} />
            <Route path="/boxoffice" element={<BoxOffice/>} />
            <Route path="/foodmarket" element={<FoodMain/>} />
            <Route path="/festival" element={<FestivalMain/>} />
            <Route path="/gallery" element={<GalleryMain/>} />
            <Route path="/forecast" element={<Frcst/>} />
            <Route path="/ultra/:dt/:area/:x/:y" element={<UltraSrtRcst/>} />
            <Route path="/vilage/:dt/:area/:x/:y" element={<VilageFrcst/>} />
            <Route path="/flist/" element={<FrcstList/>}/>
          </Routes>
          </main>
        <footer className="flex justify-center items-center
                          h-20
                          p-30
                          text-base font-mono text-[#BDFFFD]
                          bg-[#5E6973]">
          ⓒ 2024 kimujeong. All right reserved.
          </footer>
          
      </div>
      </BrowserRouter>
    </>
  );
}


export default App;
