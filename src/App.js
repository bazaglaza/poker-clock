import react, { useState, useEffect } from 'react';
import structure from "./tournament_structure.js";
import TimerDisplay from "./components/TimerDisplay"
import TimerControl from './components/TimerControl.jsx';
import { secToTime, timeToSec } from './helpers/time-helpers.js';

function App() {

  let startTime = 1800;

  const [time, setTime] = useState(startTime);

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
