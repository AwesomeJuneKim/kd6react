import GalleryCard from "./GalleryCard"
import { useEffect, useState, useRef } from "react"
export default function FestivalMain() {
    const[Tdata,setTdata]=useState();
    const[guname, setGuname]=useState();
    const[opTags, setOpTags]=useState();
    const selRef=useRef();
    const[Gcard, setGcard]=useState();
    //url에서 json파일 갖고 오기
    const getDataFetch=(url)=>{
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>setTdata(data.getFestivalKr.item))
        .catch(err=>console.log(err));
      } 
    useEffect(()=>{
        let url=`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
        url=`${url}serviceKey=${process.env.REACT_APP_APIKEY}`
        url=`${url}&pageNo=1&numOfRows=40&resultType=json`
        // console.log(url)

        getDataFetch(url);
    },[]);
    useEffect(()=>{
        if(!Tdata) return;
        let gudata=Tdata.map(item=>item.GUGUN_NM)
        gudata=new Set(gudata);
        gudata=[...gudata].sort();
        // console.log("GuData:",gudata);

        setGuname(gudata);
    },[Tdata]);
    useEffect(() => {
        if (!guname) return;
        // console.log(guname);
        let gtag = guname.map(item => (
            <option key={item} value={item}>{item}</option>
        ));
        setOpTags(gtag);
    }, [guname]);
    const handleSelGu=() => {
        // console.log(selRef.current.value)
        let gucard=Tdata.filter(item=>item.GUGUN_NM===selRef.current.value)
        let gudisplay=gucard.map(item=>
            <GalleryCard imgUrl={item.MAIN_IMG_THUMB}
                        title={item.MAIN_TITLE}
                        ptitle={item.TITLE}
                        ktag={item.TRFC_INFO}
                        />)
        setGcard(gudisplay);
        // console.log(gucard)
    };
    
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
        
        <form className="w-3/5 mx-auto mt-10">
            <label htmlFor="gu" className="w-1/3 mb-2 text-sm font-bold text-gray-900 p-2">부산축제 구 선택</label>
            <select id="gu" 
                    onChange={handleSelGu}
                    ref={selRef}
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2">
            <option defaultValue>구 선택</option>
            {opTags}
            </select>
        </form>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Gcard}
        </div>
    </div>
  )
}
