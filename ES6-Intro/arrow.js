// normal/ function declaration
// function add(a,b) {
//     const res = a+b;
//     return res;
// }

// simplified
function add(a,b) {
    return a+b;
}
// function expression/ annoniomus function
const add2 = function(a,b){
    return a+b
}
// arrow function
const add3 = (a,b)=> a+b;
const add4 = (a,b,c,d,e)=>a+b+c;
const sum = add(5,9);
const sum3 = add3(592,9);
const sum4 = add3(2,1);
console.log(sum)
console.log(sum3)
console.log(sum4)