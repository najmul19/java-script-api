const num = [12, 43, 5, 3, 5, 33, 4];
function doubleIt(n) {
  return n * 2;
}
// map--> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally return you the array
const res = num.map(doubleIt);
console.log(res);


const double2 = n => n*2;
const output = num.map(double2)
console.log(output)


//very short
const output2 =  num.map(n=>n*2);
console.log(output2)



const doubled = [];
for (const i of num) {
  const d = i * 2;
  doubled.push(d);
}
console.log(doubled);
