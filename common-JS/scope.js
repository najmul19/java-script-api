function add(a,b){
    const to=a+b;
    if(a>5){
        const sum = 25+a+b;

    } else {
        const sum = 5+a+b;
        var current =sum // var will go function top which name is hoisting which not follow rules of scope
    }
    console.log(current)
    return to;
}