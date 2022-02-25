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
        changeStatusToPaused();
      }
    }, [props.time])

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
                        setTime={props.setTime} 
                        setInterv={setInterv} 
                        changeStatusToRunning={changeStatusToRunning}
                    >RUN</TimerRunButton> : ""
                }
                { (status === 1) ?
                    <TimerStopButton 
                        interv={interv} 
                        changeStatusToPaused={changeStatusToPaused}
                    >STOP</TimerStopButton> : ""
                }
                { (status === 2) ?
                    <TimerRunButton 
                        setTime={props.setTime} 
                        setInterv={setInterv} 
                        changeStatusToRunning={changeStatusToRunning}
                    >RESUME</TimerRunButton> : ""
                }
            </div>
        </div>
    )
}

export default TimerControl