import "./Hello.css";
function Hello(){
    let n= Math.floor(Math.random()*100)+1;
    const st1={
        backgroundColor:"darkgreen",
        color:"white"
    }
    return(
        <h1>
            <span style={st1}>Hello</span>
            <span style={{display:"inline-flex", margin:"10px"}}>{n}</span>
            짝수 홀수
        </h1>
    );
}
export default Hello;