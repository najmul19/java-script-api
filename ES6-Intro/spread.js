// ... means spread operator

const max = Math.max(5,3,6,224,24,1)
const num = [2,3,4,6,4,77,3,2,334,3,4,,4]
const arrayMax = Math.max(num)
// console.log(arrayMax) NaN
console.log(...num)// ... this dot give the actual value of the array
console.log(max)

// use spread operator to copy
// non premitive: when copy they use reference thats why both are cahnge is any cahnge two of them
const nums = [2,3,46,4]
const num2 = nums;
const p = [nums]
num2.push(69)
console.log(nums)
console.log(num2)
console.log(p)


const pp = [...nums] // ... means spread operator/ copy
console.log(pp)
nums.push(19)
console.log(nums)

// addvanced

const s = [...nums,100]// add extra eleemnt while copy
console.log(s)