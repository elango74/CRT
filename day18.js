//set function 
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let name="Elango";
let age=19;
let person1=new person(age,name);
console.log(person1)
//sets
const num=new Set([1,2,3,4,5]);
const num1=new Set([11,22,3,44,53,6])
console.log(num);
console.log(num.delete(2))
console.log(num.clear())
const set1=new Set([1,2,3,4,5]);
const set2=new Set([11,22,3,44,53,6])
const union=set1.union(set2);
console.log(union)
const inter=set1.intersection(set2);
console.log(inter)
const symer=set1.symmetricDifference(set2);
console.log(symer);
const symer1=set2.symmetricDifference(set1);
console.log(symer1)