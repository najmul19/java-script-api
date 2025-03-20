function stopWatch(){
    let cont = 0;
    return function(){
        cont++;
        return cont;
    }
}

const w = stopWatch()//call outer fucntion
console.log(w()) //1
console.log(w())//2
console.log(w())//3

const w2 = stopWatch()
console.log(w2())
console.log(w2())