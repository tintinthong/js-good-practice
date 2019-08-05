const horse={  
    name: 'Bob',
    size:'large',
    skills: ['gallop','run']
}

'Bad String Code '

let bio =  horse.name + ' is a '+  horse.size + ' with skills in ' + horse.skills.join(' & ')
console.log(bio);

'Good String Code '

const {name,size,skills}=horse;

let bio2 = `${name} is a ${size} with skills in ${horse.skills.join(' & ')}`
console.log(bio2);