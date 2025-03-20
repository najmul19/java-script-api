function sum(a,b,c){
    console.log(arguments)// arry like obaject
    const arg = [...arguments]
        console.log(arg)
    
    const res = a+b+c;
    return res;
}
const total = sum(12,23,43,52,12,1)
console.log(total)
console.log(sum.length)