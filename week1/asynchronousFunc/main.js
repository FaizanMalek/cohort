// const { Console } = require('console');
// const fs= require('fs');
// function fznReadsFile() {
//     return new Promise(function (resolve) {
//         fs.readFile("a.txt","utf-8",function(err,data){
//             resolve(data);
//         })
//     })
// }

// function onDone(x) {
//     console.log(x);
// }

// fznReadsFile().then(onDone);
// console.log("hey");


// var p = new Promise(function(resolve){
//     setTimeout(()=>{resolve("whatevr")},1000);
// })

// function onDone(){
// console.log(p);
// }
// console.log(p);
// p.then(onDone);

function fzReadsFile() {
    var p = new Promise(function (resolve) {
    
            resolve("hi there");
        
    });
    return p;
}

async function main() {
    let value = await fzReadsFile();
    console.log(value); 
}

main();


// async function main() {
//     let value = await fzReadsFile();
//     console.log(value);
// }

// console.log(fzReadsFile()) 



// const fs = require("fs");
// //filesystem module

// fs.readFile("a.txt", "utf8", function(err, data){
//     console.log(data);
// })

// console.log("Hey there")

// let a = 0;
// // takes very long time
// for(let i = 0; i<10000000000; i++){
//     a++;
// }

// console.log("Hey there 2");

// //my own async function
// function myReadFile(callback){
//     fs.readFile("a.txt","utf-8", function(err,data){
//         callback(data);
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// myReadFile(onDone);

// //my own async func with promises (cleaner way)
// function myReadFile1(){
//    return new Promise(function(resolve){
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             resolve(data);
//         })
//     })
// }

// function onDone1(data){
//     console.log(data);
// }

// myReadFile1().then(onDone1);

// // async await syntax

// function myReadFile2(){
//     let p = new Promise(function(resolve){
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             resolve(data);
//         })
//     })
//     return p;
// }

// async function main(){
//        const value =  await myReadFile2();
//        console.log(value);
// }

// main();