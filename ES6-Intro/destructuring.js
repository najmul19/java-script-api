const actor = {
    name: 'jack',
    age: 30,
    phone: '01702929302',
    money: 1239903,
}
// if right side is an object then left side destructuring will be object as well
// use property name as a variable as contain property value

const {name,age:ok}= actor // chaange var its called allias
// const phone  = actor.phone;
// const age  = actor.age;
// const name  = actor.name;
// const money  = actor.money;

console.log(name);
console.log(ok);
console.log(name);
console.log(name);

// array destructuring
const num = [12,234,24,24,2]

const [f,s] = num
const [x,y] = [1,2]

console.log(f,s)
console.log(x,y)
function doDouble(a,b){
    return [a*2, b*2];
}

const [ fst, scnd] = doDouble(6,8);
console.log(fst,scnd)