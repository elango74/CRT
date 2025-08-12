//map function
//this Map is method
/*const f=new Map(
    [
        ["a",500],
        ["b",600],
        ["c",700],
    ]
);
console.log(f.get("a"))
console.log(f.has("d"))
f.delete("c")
console.log(f.has("c"))
f.get("a")

const cap=new Map();
cap.set("1","New");
cap.set("2","ASas");
console.log(cap.get("1"));
console.log(cap.has("2"));
console.log(cap.get("2"));

//arrow function
let a=5;
let b=15;
let sum=function(x,y){
    return x+y
}
let sum1=(x,y)=>x+y;
let g=(x,y)=>x>y?x:y
console.log(sum(a,b));
console.log(g(a,b));
console.log(sum1(a,b));*/

//closure function

function outer(){
    let count=0
    return function inner(){
        count++;
        return count;
    };
}

const counter=outer();
console.log(counter());
console.log(counter());
console.log(counter());

const counter2=outer();
console.log(counter2());

//default arugument
let g=(function(name="Nathaaa"){
    return `Hello ${name}`
})();
console.log(g)