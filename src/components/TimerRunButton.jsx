const TimerRunButton = (props) => {

    function run(){
        props.setTime(prevTime => prevTime - 1);
    }

    function start(){
        run();
        props.setInterv(setInterval(run, 1000));
        props.changeStatusToRunning();
    }

    return(
        <button className='clock__run-button' onClick={start}>{props.children}</button>
    )
}

export default TimerRunButton