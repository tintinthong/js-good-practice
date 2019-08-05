const pikachu = {name:'Pikachu'};
const stats = {hp:40,attack:60,defense:45};

'Bad Object Code'


pikachu['hp']=stats.hp
pikachu['attack']=stats.attack
pikachu['defense']=stats.defense
console.log(pikachu);


'OK Code'

const lvl0=Object.assign(pikachu,stats)
const lvl22= Object.assign(pikachu,{hp:100})

console.log(lvl0)
console.log(lvl22)

'Good Object Code'

const lvl1={...pikachu,...stats}
const lvl2={...pikachu,hp:45}
console.log(lvl1)
console.log(lvl2)
