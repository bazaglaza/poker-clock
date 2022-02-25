import { secToTime } from "../helpers/time-helpers";

const TimerDisplay = (props) => {
    
    const time = secToTime(props.time);

    return (
        <div className='clock__timer'>
            <span>{time.h ? time.h + ":" : ""}</span>
            <span>{time.m > 9 ? time.m + ":" : "0" + time.m + ":"}</span>
            <span>{time.s > 9 ? time.s : "0" + time.s}</span>
        </div>
    )
}

export default TimerDisplay