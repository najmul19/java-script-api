/**
 * truthy:
 * 1. true
 * 2. any number(+,-)will be truthy
 * 3. any string other than emepty string
 * 4. '0' truthy
 * 5. 'false' truthy {}
 * 6. empty object, empty array []
 * 
 * falsy:
 * 1. false
 * 2. 0
 * 3. ''(empty string)
 * 4. undefined
 * 5. null
 */
// check truthy
const x=null;
if(!x){
    console.log('valu is false');
}

const y=' ';
if(!!y){
    console.log('truth')
}