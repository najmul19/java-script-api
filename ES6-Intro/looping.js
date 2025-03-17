// for of use on array or string not in object
// for in use on objetc
num = [12,2,4,5,3,5,3]
// for(let i=0;i<num.length;++i){}
// for (const i of num){
//     console.log(i)
// }

const name = 'najmul'

for (const i of name){
        console.log(i)
}

const glass ={
    // key: value
    // properties: value
    name:'glass',
    color:'golden',
    price:12,
    isClean:true
};

// for(const key of glass){ not work
//     console.log(key)
// }
for(const key in glass) {
    // its worked
    const value = glass[key]
    console.log(key,value)
}
// optional
const keys = Object.keys(glass)
console.log(keys)
for( const key of keys){
    const val = glass[key]
    console.log(key,val)
}
