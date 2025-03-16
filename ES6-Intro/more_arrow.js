const dif = (x,y) => x-y; // implicit return

const mul = (a,b,c)=>a*b*c;
// lingle parameter
const getAge=(p) => p.age;
st={name: 'najmul', age:'23'}
const age = getAge(st)
console.log(age)

const getT = num =>num[2];

const t = getT([2,3,4,5])
console.log(t)

// no parameter

const getPI = () => Math.PI
console.log(getPI())

// large arrow function( here must use return )
const doMath = (x,y,z)=>{
    const sum = x+y+z;
    const mul = x*y*z;
    // const res = sum+mul;
    // return res;
    return sum+mul;
}

console.log(doMath(1,2,3))