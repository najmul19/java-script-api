class Person{
    constructor(name, age){
        this.name=name;
        this.age= age
    }
    sleep() {
        console.log(`sleeping ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}

const fotik = new Person('fotik ali',69)
console.log(fotik)
fotik.sleep()

// ======
const lazy = fotik.sleep;
lazy()