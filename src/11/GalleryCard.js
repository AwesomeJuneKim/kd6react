import TailButton from '../ui/TailButton';
import { useEffect, useState } from 'react';
export default function GalleryCard({imgUrl,title,ptitle,ktag}) {//1+프롭스로 사용하고자하는 상수를 매개변수로 지정하면
    //다른데이터를 넣을 수 있도록 상수를 정해준다.(gdata.~를 넣으면 주소 바뀔때마다 전체 다 바꿔야 함)
    // const imgUrl=gdata.galWebImageUrl
    // const title=gdata.galTitle
    // const ptitle=gdata.galPhotographyLocation
    // const ktag=gdata.galSearchKeyword//매개변수로 전달되는 상수를 정의할 필요가 없다.

    const [tags, setTags]=useState([]);
    const [sm, setSm]=useState([]);

    useEffect(()=>{
        setTags(ktag.split(', '));
        //키워드데이터를 배열로 만든다.
    },[])
    useEffect(()=>{
        if(tags.length > 0){//배열로 만들어진 tags에 데이터가 있는경우에
            let tm=tags.map(item=>//tags안에 있는 데이터를 tailbutton으로 표현한다.
                <TailButton caption={item} color="gray"/>)
                setSm(tm);
        }
    },[tags])
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-4'>
        <img src={imgUrl} alt={title} className='rounded-lg'/>
            <div>
                <h1 className='text-xl font-bold pt-2 pl-1'>{title}</h1>
                <h3 className='p-1 pl-2'>{ptitle}</h3>
                <div className='p-2 text-sm font-semibold'>{sm}</div>
            </div>
        </div>
    </div>
  )
}
