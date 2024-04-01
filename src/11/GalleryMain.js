import React, { useState, useEffect, useRef } from 'react'; // 'useState'를 'react' 라이브러리에서 불러옴

import GalleryCard from "./GalleryCard";
// import gdata from './GalleryData.json';
import TailInput from '../ui/TailInput';
import TailButton from "../ui/TailButton";

export default function GalleryMain() {
    const keyword = useRef();
    const [trdata, setTrdata] = useState(); // 'useState'를 정의
    const[tags,setTags] = useState();

    const getDataFetch = () => {
        if (!keyword.current.value || keyword.current.value==='' ) return ;
        console.log("k",encodeURI(keyword.current.value) )
        
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url += `serviceKey=${process.env.REACT_APP_APIKEY}`
        url += `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
        url += `&keyword=${encodeURI(keyword.current.value)}&_type=json`
        console.log(url)

        fetch(url)
        .then(reps => reps.json())
        .then(data => setTrdata(data.response.body.items.item))
        .catch(err => console.log(err))
    }

    // const handleFetch = () => {  
    //     console.log(keyword.current.value)
    // };

    const handleClear = () => {
        // 추가 구현 내용
        setTrdata('');
        setTags('');
        keyword.current.focus();
    };

    useEffect(() => { 

    }, [keyword]);
    useEffect(()=>{
        if(!trdata) return;
        let card=trdata.map(item=>
            <GalleryCard imgUrl={item.galWebImageUrl.replace('http://','https://')} title={item.galTitle} ptitle={item.galPhotographyLocation} ktag={item.galSearchKeyword} key={item.galContentId}/>)
        setTags(card);

    },[trdata]);
    return (
        <div className="w-11/12 flex flex-col h-full justify-start items-center mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#F0F8FF] p-3 pr-7">
                <div className="p-2">
                    <TailInput type="text"
                                inputRef={keyword}
                                ph="키워드입력" />
                </div>
                <div>
                    <TailButton caption="조회"
                                color="blue"
                                handleClick={getDataFetch} />
                </div>
                <div>
                    <TailButton caption="취소"
                                color="green"
                                handleClick={handleClear} />
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#F0F8FF] p-3 pr-7'>{tags}</div>
        </div>
    )
}
