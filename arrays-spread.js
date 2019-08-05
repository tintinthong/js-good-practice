let pokemon = ['Arbok', 'Raichu', 'Sandshrew']

'Bad Code'


pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')

console.log(pokemon);

'Good Array Code'

let pokemon3=[...pokemon,'Bulbasaur','Metapod','Weedle']
let pokemon2=['Bulbasaur','Metapod','Weedle',...pokemon,]
console.log(pokemon3);
console.log(pokemon2);