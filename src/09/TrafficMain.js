import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";
export default function TrafficMain() {
  const[Tdata,setTdata]=useState();
  const [c1,setC1]=useState();//대분류를 만듦, 중복도 제거해야 함
  const[selC1, setSelC1]=useState();//선택된 대분류->nav에서 보내지고 받을 아이들
  useEffect(()=>{
    const getDataFetch=(url)=>{
      fetch(url)//비동기 방식(데이터를 받기 전까지 다른 작동을 하고 있게 함, 동기방식은 데이터를 받아야 다음 작동을 할 수 있음)
      .then(resp=>resp.json())//url 데이터 줘->response로 jason으로 받음
      .then(data=>setTdata(data.data))//data는 다른단어 써도 됨//페치해서 갖고온 데이터를 세터에 저장함
      .catch(err=>console.log(err));//에러나서 다운되지 않게 콘솔에 적히게 함
    }
    let url=`https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
    url=`${url}page=1&perPage=20&`
    url=`${url}serviceKey=${process.env.REACT_APP_APIKEY}`
    console.log(url)

    getDataFetch(url);
  },[]);
  useEffect(()=>{
    if(!Tdata) return;//처음에는 Tdata가 불러지지 않으므로 Tdata가 불러지지 않을때는 리턴하도록 한다.
    console.log("Tdata:",Tdata)
    let data=Tdata.map(item=>item['사고유형_대분류'])//빈칸이 없으므로 .연산자 사용가능
      data=new Set(data);
      data=[...data];
      console.log(data)
      setC1(data);
  },[Tdata]);//세터에 의해서Tdata에 변화가 있으면 유즈이펙트가 실행 됨
  return (
    <div className="w-full h-full mt-5 flex flex-col justify-start items-center">
      {c1 && <TrafficNav title="대분류"
                  category={c1}
                  sel={selC1}
                  setSel={setSelC1}/>}
    </div>
  )
}
