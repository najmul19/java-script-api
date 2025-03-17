const products = [
  {
    id: 1,
    name: "leno",
    price: 5600,
  },
  {
    id: 100,
    name: "lenovatu",
    price: 600,
  },
  {
    id: 2,
    name: "mac",
    price: 560000,
  },
  {
    id: 3,
    name: "pac",
    price: 560000,
  },
];

// map
const names = products.map(product=>product.name)
console.log(names)

// forEach
products.forEach(p=>console.log(p.id))

// filter
const exp = products.filter(p=>p.price>50000);
console.log(exp)

// find
const affordable = products.find(p=>p.price<50000)
console.log(affordable)

// reduce
const tot = products.reduce((accum,cur)=>accum+cur.price,0)
console.log(tot)
