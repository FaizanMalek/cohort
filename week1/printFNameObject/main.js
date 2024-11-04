const people = [{
    "firstName" : "faizan" ,
    "gender" :"male" ,

},{
    "firstName" : "xddx" ,
    "gender" :"female" ,

},{
    "firstName" : "wegfweg" ,
    "gender" :"male" ,

},{
    "firstName" : "dfbdfg" ,
    "gender" :"female" ,

}]

for(let i=0; i<people.length; i++){

if(people[i]["gender"]== "male")
    {
        console.log(people[i]["firstName"])
    }
}