import MyList from './MyList';
import ListData from './MyListData';
export default function MyListMain() {
    console.log(ListData);
    const myItems=ListData.map(item=>
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
