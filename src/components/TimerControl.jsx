import { useState, useEffect } from 'react';
import Slider from './Slider';
import TimerRunButton from './TimerRunButton'
import TimerStopButton from './TimerStopButton';

const TimerControl = (props) => {

    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0); // 0 - not started, 1 - running, 2 - paused, 3 - stoped
  
    const changeStatusToRunning = () => setStatus(1);
    const changeStatusToPaused = () => setStatus(2);
    const changeStatusToStopped =() => setStatus(3);

    useEffect(() => {
      if(props.time == 0) {
        clearInterval(interv);
        changeStatusToStopped();
      }
      if ((status === 3)&&(props.time > 0)){
        startTimer();
      }
    }, [props.time])

    function runTimer(){
        props.setTime(prevTime => prevTime - 1);
    }

    function startTimer(){
        runTimer();
        setInterv(setInterval(runTimer, 1000));
        changeStatusToRunning();
    }
    function stopTimer(){
        clearInterval(interv);
        changeStatusToPaused();
    }

    return (
        <div className='clock__control'>
            
            <Slider 
                start={props.startTime}
                end={0}
                setValue={props.setTime}
                value={props.time}
            />

            <div className='clock__buttons'>
                { (status === 0) ?
                    <TimerRunButton 
                        startTimer={startTimer}
                    >RUN</TimerRunButton> : ""
                }
                { (status === 1) ?
                    <TimerStopButton 
                        stopTimer={stopTimer}                       
                    >STOP</TimerStopButton> : ""
                }
                { (status === 2) ?
                    <TimerRunButton 
                        startTimer={startTimer}
                    >RESUME</TimerRunButton> : ""
                }
            </div>
        </div>
    )
}

export default TimerControl