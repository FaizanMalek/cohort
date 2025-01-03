/////////////////////////////////////////
// let i =30;
// let x = setInterval(()=>{
    
//     console.log(i);
//     i--;
//     if(i==0) clearInterval(x);
// },1000)

//////////////////////////////////////////

/////////////////////////////////////////



setInterval(()=>{
    console.clear();
    const date = new Date();
    let hours=String(date.getHours()).padStart(2,'0');
    let minutes=String(date.getMinutes()).padStart(2,'0');
    let seconds= String(date.getSeconds()).padStart(2,'0');
    
    console.log(`${hours}:${minutes}:${seconds}`);
    
},1000)



// let startTime = Date.now();

// setTimeout(()=>{
//     let endTime = Date.now();
//     let elapsedTime = endTime - startTime;
//     console.log("The time taken is "+ elapsedTime) ;
// },1000)
// /////////////////////////////////////////

// function watch() {
// const time = new Date();

// let hours = String(time.getHours()).padStart(2,"0");
// let minutes = String(time.getMinutes()).padStart(2,"0");
// let seconds = String(time.getSeconds()).padStart(2, "0");

// console.clear();
// console.log(`${hours}:${minutes}:${seconds} `) ;

// }
// setInterval(watch,1000)