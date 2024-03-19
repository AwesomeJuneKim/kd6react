import BoxOfficeData from './BoxOffice.json'
import { useState } from 'react';
import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from './BoxOfficeThead';
import BoxOfficeInfo from './BoxOfficeInfo';
export default function BoxOfficeTb() {
    const [Mcontent,setMcontent]= useState();
    const boxlist=BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
    
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className="w-4/5 border">
        <BoxOfficeThead />
        <BoxOfficeTbody boxlist={boxlist} setMcontent={setMcontent}/>
      </table>
        <BoxOfficeInfo Mcontent={Mcontent}/>
    </div>
  )
}
