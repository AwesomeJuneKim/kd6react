import './MyClock.css';
import MyClockImg from './MyClockImg';
import MyClockTime from './MyClockTime';

function MyClock(){

    return(
        <div className="mainArea">
        <MyClockImg />
        <MyClockTime />
        </div>
    );
}
export default MyClock;