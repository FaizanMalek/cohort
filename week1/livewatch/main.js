/////////////////////////////////////////
let count = 30;
for(let i=count; i>0;i--)
    {
    console.log(i);
    }
//////////////////////////////////////////

let startTime = Date.now();

setTimeout(()=>{
    let endTime = Date.now();
    let elapsedTime = endTime - startTime;
    console.log("The time taken is "+ elapsedTime) ;
},1000)
/////////////////////////////////////////

function watch() {
const time = new Date();

let hours = String(time.getHours()).padStart(2,"0");
let minutes = String(time.getMinutes()).padStart(2,"0");
let seconds = String(time.getSeconds()).padStart(2, "0");

console.clear();
console.log(`${hours}:${minutes}:${seconds} `) ;

}
setInterval(watch,1000)
/////////////////////////////////////////