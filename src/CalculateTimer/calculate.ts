const calculate = (timeSec: number):Array<number | string>=>{

let hours: number = Math.floor(timeSec / 3600);
let minutes: number = Math.floor((timeSec - (hours * 3600))/ 60);
let seconds: number = (timeSec - ( hours * 3600) - (minutes * 60));

let hoursDisplay = hours < 10 ? `0${hours}` : hours;
let minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
let secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
// console.log(hours, minutes, seconds)
// console.log(hoursDisplay, minutesDisplay, secondsDisplay)
return [ hoursDisplay, minutesDisplay, secondsDisplay];
}
export default  calculate;