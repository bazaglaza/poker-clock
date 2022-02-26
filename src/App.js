import { useEffect, useState } from 'react';
import structure from "./tournament_structure.js";
import TimerDisplay from "./components/TimerDisplay";
import TimerControl from './components/TimerControl.jsx';

function App() {

  const [periodData, setPeriodData] = useState(getPriodDataById(1, structure));

  const [startTime, setStartTime] = useState(periodData ? periodData.time : 0);

  const [time, setTime] = useState(startTime);

  useEffect(() => {
    if (!time) {
      let newPeriodData = getPriodDataById(periodData.id + 1, structure);
      console.log(newPeriodData);
      setPeriodData(newPeriodData);
    }
  }, [time])

  useEffect(() => {
    setStartTime(periodData ? periodData.time : 0);
  }, [periodData]);

  useEffect(() => {
    if (startTime) { setTime(startTime); }
  }, [startTime]);

  function getPriodDataById(id, dataArray){
    return dataArray.filter(period => period.id == id)[0];
  }

  return (
    <div className="container">
      <div className="clock">
        <TimerDisplay time={time} />
        <TimerControl 
          time={time}
          setTime={setTime}
          startTime={startTime}
        />
      </div>      
    </div>
  );
}

export default App;
