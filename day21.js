/*
let x= document.body;
let a=x.getElementsByTagName("p");
let c=a.length;
console.log(a);


document.querySelector("p:last-of-type").innerHTML = "This is the last paragraph";
document.querySelector("p:first-of-type").innerHTML = "This is the paragraph";
*/



/*let new1=document.createElement('p')
new1.innerHTML='This an element'
document.body.appendChild(new1);
document.body.appendChild(new1);

document.body.appendChild(new1);
let first=document.getElementById('p')[0].firstChild
document.getElementsByTagName('p')[0].removeChild(first);*/


//this is used to mod text//
let a=document.querySelector('p')
a.innerHTML='This an tag of js';

let b=document.querySelectorAll('p')[1]
b.textContent='This an 2nd child';

let c=document.querySelectorAll('p')[2]
c.style.color='red'
c.style.fontSize='20px'
c.backgroundColor='black'