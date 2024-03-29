
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
// import Lotto from "./06/Lotto";
// import FoodCard from "./07/FoodCard";
// import MyClock from "./08/MyClock";
// import FoodMain from "./07/FoodMain";
// import TrafficMain from "./09/TrafficMain";
// import RefVal from "./10/RefVal";
// import RefInput from "./10/RefInput";
// import BoxOffice from "./05/BoxOffice";
// import GalleryCard from "./11/GalleryCard";
import GalleryMain from "./11/GalleryMain";

function App() {
  return (
    <>
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
          <div className='text-5xl text-green-950'><ImAppleinc /></div>
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
          <GalleryMain/>
          </main>
        <footer className="flex justify-center items-center
                          h-20
                          p-30
                          text-base font-mono text-[#BDFFFD]
                          bg-[#5E6973]">
          ⓒ 2024 kimujeong. All right reserved.
          </footer>
          
      </div>

    </>
  );
}


export default App;
