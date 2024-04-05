import { atom, selector } from "recoil";
//함수가 아닌 변수선언
export const rcnt=atom({
    key:'rcnt',
    default:0
});

export const rcnt2=selector({
    key:'rcnt2',
    get: ({get})=>{
        return get(rcnt)*2
    }
});