function square (n){
return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSquares(a,b){
   return square(a) + square(b);
}

function sumOfCubes(a,b){
    return cube(a) + cube(b);
}

// callback

function sumOfSomething(a, b, callback){
    console.log(a);
    console.log(b);
    console.log(callback);
    let val1=callback(a);
    let val2=callback(b);
    return val1 + val2;
}

// anonymous function

const ans = sumOfSomething(5,3, function(n)
    {return n*n*n})


console.log(sumOfSomething(5,3,square))
console.log(sumOfSomething(5,3,cube))
console.log(ans)
