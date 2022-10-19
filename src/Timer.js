import React,{useState,useEffect} from "react"
export default function Timer(){
    const [time,setTime] = useState(0)
    const[isRunning,setIsRunning] = useState(false)
    
    useEffect(()=>{
        if(isRunning){
            const interval = setInterval(() => {
             setTime(prevTime=>prevTime + 1);
            }, 1000);
            return ()=> clearInterval(interval)
        }
        
    },[isRunning])
    return(
        <div className="timer">
             <h1 className="title-game">Start your game</h1>
             <h1 className="time">{time}</h1>
             <div className="buttons">
             <button onClick={()=>setIsRunning(prevRun=>!prevRun)}>{isRunning?"Stop" : "Start"}</button>
             <button onClick={()=>setTime(0)}>Reset</button>
             </div>
             
        </div>
       
    )
}