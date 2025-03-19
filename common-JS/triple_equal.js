/**
 * always use ===
 * equal comparson soesnt work for non primitive
 */
const f=1;
const s=true;
if(f==s){
    console.log('== true')
} else {
    console.log('== false')
}
if(f===s){
    console.log('=== true')
} else {
    console.log('=== false')
}

// note: non premitive check refernace
// note: premitive check value(==) check value and type(===)

// type coercion
