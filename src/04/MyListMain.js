import MyList from './MyList';
import ListData from './MyListData';
export default function MyListMain() {
    console.log(ListData);
    const myItems=ListData.map(item=>

        //오브젝트 하나가 item이고(자바의 int i) 오브젝트의 키값을 갖고오면 밸류가 출력됨
        <MyList title={item.title}
        imgUrl={item.imgUrl} 
        content={item.content}
        key={item.title}/>
        );
  return (
    <div className='w-11/12 grid grid-cols-4 gap-4 md:grid-cols-2'>
        {myItems}
    </div>
  )
}
