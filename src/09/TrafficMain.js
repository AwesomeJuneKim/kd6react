import { useEffect } from "react"
export default function TrafficMain() {
  useEffect(()=>{
    const getDataFetch=(url)=>{
      fetch(url)//비동기 방식(데이터를 받기 전까지 다른 작동을 하고 있게 함, 동기방식은 데이터를 받아야 다음 작동을 할 수 있음)
      .then(resp=>resp.json())//url 데이터 줘->response로 jason으로 받음
      .then(data=>console.log(data))//data는 다른단어 써도 됨
      .catch(err=>console.log(err));//
    }
    let url=`https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
    url=`${url}page=1&perPage=10&`
    url=`${url}serviceKey=${process.env.REACT_APP_APIKEY}`
    console.log(url)

    getDataFetch(url);
  },[]);
  return (
    <div>
      교통사고
    </div>
  )
}
