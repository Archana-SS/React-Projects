import {useState,useRef} from 'react'

function App(){
  const [time,setTime]=useState(0);

  let timerRef=useRef(null); //to persist the value of timer across re-renders
  
  funtion startTimer(){
    timerRef.current=setInterval(()=>{setTime(time=>time+1)},1000)
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current=null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }
  
  return(
    <>
      <h1>StopWatch : {time} seconds</h1><br/><br/>
      <button onClick={startTime}>Start</button><br/><br/>
      <button onClick={stopTimer}>Stop</button><br/><br/>
      <button onClick={resetTimer}>Reset</button><br/><br/>
    </>
  )
}
