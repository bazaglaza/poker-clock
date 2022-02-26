const TimerStopButton = (props) => {

    return(
        <button className='clock__stop-button' onClick={props.stopTimer}>{props.children}</button>
    )
}

export default TimerStopButton