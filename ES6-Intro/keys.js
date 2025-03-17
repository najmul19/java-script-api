const glass ={
    // key: value
    // properties: value
    name:'glass',
    color:'golden',
    price:12,
    isClean:true
};
console.log(glass)
// propery name
const keys = Object.keys(glass)
console.log(keys)
// property values
const values = Object.values(glass)
console.log(values)
const pair = Object.entries(glass)
console.log(pair)
// output : array of array/2d array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isClean', true ]
//   ]

delete glass.isClean;
console.log(glass);
// { name: 'glass', color: 'golden', price: 12 }
const {isClean, ...shortGlass}=glass;
console.log(shortGlass)

// freeze
// Object.freeze(glass) 
Object.seal(glass) // if we set seal then its just work for ovveride(change)
glass.source = 'bangladesh'// if freeze it will not add
glass.price=1222// if freeze it will not add
delete glass.name// if freeze it will not add
console.log(glass)

