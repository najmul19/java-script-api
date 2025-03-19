/**
 * 8. ways to get undefined
 * 1. variable that is not initialized
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will retun undefined
 * 5. property that doesnt exist on object will give undefined
 * 6. accesding array elements outside of the range
 * 7. deleting an eleement inside an array
 * 8. set a value directly to undefined
 */
let first;
console.log(first)
function second(a,b){
    const total = a+b;
}

const res = second();
console.log(res)
function third(a,b,c,d){
    const total = a+b+c+d;
    console.log(a,b,c,d);
}
third(2,5)

function no_negative(a,b){
    if(a<0 || b<0)return 
    return a+b;
}
const tot = no_negative(2,-3)
console.log(tot)

const fifth={id:2,name:'fifth', age:20}
console.log(fifth.age, fifth.salary)
const sixeth = [4,89,87,56];
// you shoukd not do it. intead use splice
delete sixeth[1]
console.log(sixeth[1],sixeth[20])
console.log(sixeth)

const eight=undefined;

const nine = null;
// typeof null object