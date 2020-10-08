let oceans = ['Pacifico', 'Atrantic', 'Indico', 'Antartico']
console.log('Oceans', oceans[2]);
let sharks = new Array('Hambeargear', 'Great white', 'tiger');
console.log('Sharks', sharks[1]);
let mixedData = [
    'string',
    null,
    7
    [
        'another',
        'array'
    ]
];
console.log('miedData', mixedData.length);
console.log('indexof',mixedData.indexOf('string'));
console.log('indexof',mixedData.indexOf('dog'));
const lastindex = mixedData.length -1;
console.log('lastIndex', mixedData[lastindex]);
let nestedArray = [
    ['Salmon', 'Halibut'],
    ['coral', 'reef'],
];
console.log('Nested Array', nestedArray[1][0]);
sharks[5] = 'whale';
console.log('shark modified', sharks);
sharks.push('lobster');
console.log('lobster shark list', sharks);
sharks.unshift('dragonfish');
console.log('dragon shrak list', sharks);
sharks.splice(2,1);
console.log('splice', sharks);
sharks.pop();
console.log('pop', sharks);
sharks.shift();
console.log('shark shift', sharks);
sharks.splice(3,1, 'sea lion');
console.log('shark splice', sharks);
let shellfish = [
    'oyster',
    'shirmp',
    'clam',
    'mussel'
]

for (let i=0; i<shellfish.length; i++){
    console.log(i, shellfish[i]);
}
let mammals = ['dolphin', 'whale', 'manatee'];
   
for(let mammal of mammals){
    console.log(mammal);
}

let fish = ['piranha', 'borracuda', 'koi', 'eel'];
console.log('isArray', Array.isArray(fish));
fish.reverse();
console.log('reverse', fish);
//fish.fill('shark');
console.log('fill', fish);
sharks.fill('shark', 1, 3);
console.log('fill position', sharks);
//short

fish.sort();
console.log('sort', fish);
let numbers = [2, 90, 50, 800]
numbers.sort();
console.log('sort numbers', numbers);
const sortNumericallu = (a,b) => {
    return a - b;
}
numbers.sort(sortNumericallu);
console.log(numbers.sort(sortNumericallu));

let bike = ['susuki', 'yamaha'];
let cars = ['ford', 'chevrolet', 'toyota'];
let vehicle = bike.concat(cars);
console.log('concat', vehicle);
//join
let fishes = ['prianha', 'borracuda', 'koi', 'eel', 'borracuda'];
let fishstring = fishes.join('/ ');
console.log('join', fishstring);
let fishwnames = fishes.slice(2);
console.log('slice variable', fishwnames);
console.log('lasIndexOf', fishes.lastIndexOf('borracuda'));