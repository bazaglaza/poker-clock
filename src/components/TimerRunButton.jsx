const TimerRunButton = (props) => {

    return(
        <button className='clock__run-button' onClick={props.startTimer}>{props.children}</button>
    )
}

export default TimerRunButton