/**
 * primitive: pass by reference
 * non-primitive: pass by value
 */

let a=5;
let b = 6;
function mul(a,b){
    b=5;
    const res = a*b;
    return res;
}

const outpur = mul(a,b)
console.log(outpur)
console.log(b)

let st1 ={name:'jalil',partner:'sadiya'}
let st2 ={name:'miner',partner:'sob varsity meye'}
function makeMovie(cup1,cup2){
    cup1.name='shamim';
    cup2.partner='kd'
}
console.log(st1,st2)
makeMovie(st1,st2)
console.log(st1,st2)