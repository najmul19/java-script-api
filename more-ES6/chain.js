// data acces
const data = [{id:1, name:'abul',addrees:'nodir par'}];
console.log(data[0].addrees)

const products ={
    count: 3000,
    data: [
        {
            id:1, name:'leno',price:5600
        },
        {
            id:1, name:'mac',price:560000,
        }
    ]
}

console.log(products.data[0].name)

const user = {
    id:5001,
    name:'khan',
    addrees:{
        street:{
            first: 'gobortola',
            second: 'daner gat',
            thord: 'dusbiner pase',
        },
        city:'kochur loti'
    }
}
console.log(user.addrees.street.first);
const user2 = {
    id:502,
    name: 'odidj',
    adrress:{
        city:'uganda',
        country:'noakhaly'

    }
}
console.log(user2.adrress.street?.second); //? optional chaining
