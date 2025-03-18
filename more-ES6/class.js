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

//   has some properties, method
class Product{
    // constructor(){
    // }
    country='bangladesh'
    constructor(name){
        this.name = name;
    }
    speak(talk) {
        console.log(`talking ${talk}`)
    }
}
const lenovo = new Product('ok')
console.log(lenovo)
lenovo.speak('hello')

class Teacher{
    constructor(name, sub){
        this.name = name;
        this.sub = sub;
    }
    lecture(){
        console.log('okeeeeeeeeeeeeeee')
    }
}
const tch = new Teacher('kochu','mochu')
console.log(tch)