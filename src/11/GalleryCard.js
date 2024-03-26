import gdata from './GalleryData.json'
import TailButton from '../ui/TailButton';
import { useEffect, useState } from 'react';
export default function GalleryCard() {
    const [tags, setTags]=useState([]);
    const [sm, setSm]=useState([]);
    useEffect(()=>{
        setTags(gdata.galSearchKeyword.split(', '));
    },[])
    useEffect(()=>{
        let tm=tags.map(item=>
            <TailButton caption={item} color="green"/>)
            setSm(tm);
    },[tags])
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-4'>
        <img src={gdata.galWebImageUrl} alt=''/>
            <div>
                <h1 className='text-xl font-bold pt-1 pl-1'>{gdata.galTitle}</h1>
                <h3 className='p-1'>{gdata.galPhotographyLocation}</h3>
                <div className='p-2'>{sm}</div>
            </div>
        </div>
    </div>
  )
}
