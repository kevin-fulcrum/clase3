let animales = ['perro', 'gato', 'conejo', 'pato', 'cerdo', 'vaca'];
animales.push('burro');
animales.unshift('cocodrilo');
let nombres = ['pedro', 'pablo', 'juan', 'kilder', 'willy', 'bryan'];
console.log('animales y nombres: ', animales.concat(nombres));
for (let i=0; i<animales.length; i++){
    console.log(i, animales[i]);
} 
animales.sort();
let animalesString = animales.join(' @ ');
console.log('animales', animales);
console.log('animales separados por arroba: ', animalesString);
