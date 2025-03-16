// default: if value is not proived, take this as default
function add(num1=99,num2=0){
    const res = num1+num2;
    console.log(num1,num2, res)
    return res;
}

// const sum = add(5+19,7);
// const sum = add(5+69)
// const sum = add()
// const sum = add(1)
const sum = add()

function fullName(f,l=''){
    const ful = f+' '+l;
    console.log(ful)
    return ful;
}

const name = fullName()

function f(num=[]){

}
function p(human={}){
    
}