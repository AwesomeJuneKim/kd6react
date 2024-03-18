//기본타입
let n1=10;
let n2=10.5;
let s1="안녕하세요.";

console.log(n1,n2,s1);
console.log("문자열의 요소에 접근:",s1[1]);
    //2+ 문자열을 배열처럼 취급하여 출력한다.
for(let c of s1){
    console.log(c);
}
for(let c in s1){//3+ in을 쓰면 key값이 출력된다.
    console.log(c);
}
for(let c in s1){
console.log(s1[c]);
}
//3+ 위의 차이점은 콘솔에서 확인할 수 있다.

//배열
let arr=['❤',1,'💋',2,]
console.log("배열",arr);
console.log("배열의 요소에 접근:",arr[1])
//2+ 배열의 순회
for(let i in arr){
    console.log(arr[i]);
}
console.log("배열 for...of")
for(let i of arr){
    console.log(i); 
}//5+ ->를 맵으로 나타내려면 코드가 길어짐

//배열을 오브젝트로 만들기
let obj={'❤':1,'💋':2,}//배열에는 의미없는 쉼표가능(트레일링 쉼표)
console.log("오브젝트",obj);
console.log("오브젝트의 요소에 접근:",obj['❤'])//키를 선택해야 밸류값이 출력된다.
//2+오브젝트 순회
for(let c of Object.entries(obj)){//키,밸류가 쌍으로 출력된다.
    console.log(c);
}
for(let c of Object.entries(obj)){
    console.log("오브젝트 키:" ,c[0]);
    console.log("오브젝트 값:" ,c[1]);
}
//3+ 위의 것을 구조분해 한 것
for(let [k,v] of Object.entries(obj)){
    console.log("오브젝트 키:" ,k);
    console.log("오브젝트 값:" ,v);
}
//내가 실험 한 것
for(let c in obj){//4+ 오브젝트 키값만 출력된다.
    console.log("오브젝트 in:",c);
}
// for(let c of obj){
//     console.log("오브젝트 of:",c);
// }->에러 출력불가

//배열의 맵함수
//3+ for...of와 같은 결과가 나오므로 배열의 출력은 맵을 쓴다.
console.log("배열의 맵함수")
/*5+ const arr2->let으로 변경*/
let arr2=arr.map((v,i)=>{
    //3+ arr에 문자를 추가하여 arr2를 만드는 방법(변수v는 아무 문자나 사용가능)
    console.log("map의 v:",v,"map의 i:",i)
    //4+ map은 2개의 문자를 출력할 수 있다 key(v) value(i)
    return v+"👌";
});
console.log(arr2);


//5+ 위의 맵함수를 간결하게 만듦(콜백함수의 문법에 대한)
console.log("배열의 맵함수2")
//5+ 콜백에 인수가 한개인 경우 인수의 괄호(v)->v 생략가능
arr2=arr.map(v=>v+"👌");
//5+ 함수 바디에 실행문이 없고 리턴만 있는 경우 리턴도 생략하고 
    //리턴값만 남겨서 한줄로 표현가능
console.log(arr2);