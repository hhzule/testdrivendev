import React,{useState} from 'react'
import './Controller.css';

type Props = {
    setTimeSec:Function
};

const Controller = ({setTimeSec}: Props) => {

    const [ intervalId, setIntervalId ] = useState<number>(0)
    const [ isRunning, setIsRunning ] = useState<Boolean>(false);

const handleStart = () => {
if (isRunning){
    return
}
let interval: any = setInterval(()=>{
    setTimeSec((preState: number) =>  preState + 1);
}, 1000);
setIntervalId(interval);
setIsRunning(true);
}

const handleStop = () => {
    if(isRunning === false){
        return
    } else {
        setIsRunning(false);
    }
    clearInterval(intervalId);

}
const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setTimeSec(0);

}
    return (
        <div className='controller_container'>
            <button onClick={handleStart}>Start</button>
            <button className="center" onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Controller
