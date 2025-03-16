// var: no reason to use var
// let: allow it to reasign
// const: not allow it to reasign means it fixed

let count =0;
count++;
console.log(count)


const num = [2,4,34,3,355,34]
// num = [4,5,6] not allow
num[1]=69 // allow
num.push(199,43) // allow
console.log(num)

// onjetc
const std = {
    name: 'najmul',
    class: 'BSC in CSE final year'
}
std.name ='cahnge' // allow
console.log(std)
// std = {name:'change'}  not allow

// loop

// for ( const i=0;i<10;++i){ not allow
//     console.log(i)
// }
let sm=0
for ( let i=0;i<10;++i){
    const n=i;//allow
    sm = sm+n;
    console.log(sm);
}