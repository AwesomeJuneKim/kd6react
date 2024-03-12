function MyClockTime(){
    const currentTime=new Date();
    return (
        <p>
            {currentTime.toLocaleTimeString()}
        </p>
    );
}
export default MyClockTime;