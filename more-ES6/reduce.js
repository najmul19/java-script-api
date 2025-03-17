const players = [75,65,67,72,55,59];
const sum = players.reduce((previous,current)=>previous+current,0)//initial value zero and give two parameter, previous is the tracking or sum and current is iteration tracking

console.log(sum)

const tot = players.reduce((p,c)=>p*c,1)
console.log(tot)