const TimerStopButton = (props) => {

    function stop(){
        clearInterval(props.interv);
        props.changeStatusToPaused();
    }

    return(
        <button className='clock__stop-button' onClick={stop}>{props.children}</button>
    )
}

export default TimerStopButton