let numbers = [1,200,3,-123123,0,6435,7,8,9,10]
let biggest = 0
for (let i=0; i < numbers.length ; i++)
{
     if(numbers[i]>biggest)
     {biggest = numbers[i]}

}
console.log(biggest)