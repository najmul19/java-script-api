const user = {
    id: 1,
    name: 'tamim iqbal',
    job: 'actor'
}
console.log(user)//js

const stringified = JSON.stringify(user) // json
console.log(stringified)

const shop = {
    owner:'alia',
    address:{
        strrt:'nodir par',
        city:'goborer tol',
        country:'noakhaly',
    },
    products:['laptop','mice','key'],
    rev:100000,
    isOpen:true,
    isNew:false,
}

console.log(shop);
const shopJson = JSON.stringify(shop)// string type

console.log(shopJson)
const shopObj = JSON.parse(shopJson);
console.log(shopObj)