print5();
// p10()
for(var i=0;i<5;++i){
    console.log(i);
    
}console.log('outside: ',i);

function print5(){ // full fucntion will go top
    console.log('inside: ',5);
}

const p10=function(){ // this function will stay here
    console.log('insedi:10: ',10)
}