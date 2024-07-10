a=5;
var a=9;
console.log(a);
let b=20;
console.log(b);
{
    let b=90;
    console.log(b);
}
console.log(typeof(b));
var str='i am gowri';
console.log(typeof(str));
var d= true;
var m;
console.log(typeof(m));
var arr=['orange','apple',10];
console.log(arr[0]);
console.log(arr.length);
arr.push('mango');
console.log(arr);
// javascript Objects
let person={
    name:'gowri',
    age:24,
    location:'tvm'
}
console.log(person.age);
let arr2=[{ name:'gowri',
    age:24,
    location:'tvm'},{ name:'kailas',
        age:24,
        location:'kollam'}];
        console.log(arr2[1].location);
        // functions
function add(x,y) 
{
    var sum=x+y;
    console.log(sum)
}
add(11,30); 
function sub(x,y) 
{
    var diff=x-y;
    return diff;
}
var c = sub(20,10);
console.log(c);
    
      // postfix increment  
       a=1;
       b=a++
      console.log(a,b);
// prefix
a=1;
b=++a
console.log(a,b);
if (a==b) {
   console.log('true') ;

} else {
    console.log('false');
    
}
e=10;
s='10';
if (e>s) {
    console.log('e greater');
}
else if(e==s){
    console.log('equal');
}
else{
console.log('e is lesser');
}
// looping statements
var array=[1,2,3,4,5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    
}
for (const key in person) {
    console.log(person[key])
        
    }
for (const i of array) {
    console.log(i)
    
}    
