// 1
const euroCities = ['London', 'Rome', 'Sofia', 'Lisabon', 'Riga'];
const secondCity = euroCities[1]
console.log(secondCity);
console.log('---------------------------');

// 2
euroCities[0]= 'Berlin'
console.log(euroCities);
console.log('----------------------------------');

// 3
console.log(euroCities.length);
console.log('-------------------------------');

// 4
console.log(euroCities.pop());
console.log(euroCities);
console.log('-------------------------------');

// 5
euroCities.push('Budapest')
console.log(euroCities);
console.log('-----------------------------');

// 6
const asianCities = ['Honk Kong', 'Singapore', 'Bangkok', 'Tokyo', 'Kabul'];
console.log(asianCities);
console.log('--------------------------------');

// 7
const worldCities = asianCities.concat(euroCities);
console.log(worldCities);
console.log('-------------------------------');

// 8
worldCities.reverse();
console.log(worldCities);
console.log('--------------------------------');

// 9
euroCities.splice(2,1);
console.log(euroCities);
console.log('----------------------------------');

// 10
const alternativeAsianCities = asianCities.slice(1,4);
console.log(alternativeAsianCities);
console.log('---------------------------------');

// 11
worldCities.splice(2,1,'Toronto');
console.log(worldCities);
console.log('---------------------------------');

// 12
worldCities.splice(1,0, 'Washington');
console.log(worldCities);
console.log('--------------------------------');

// 13
console.log(worldCities.join(' + '));
console.log('---------------------------------');

// Bonus
const string = 'Hello World';
console.log(string.split('').reverse().join(''));
console.log('----------------------------------');

// Extra Practice
// 1
const siblings = ['Connor,Adam,Ciara,Sean'];
console.log('---------------------------');

// 2
const parents = ['James,Clara'];
console.log('---------------------------');

// 3
const family = siblings.concat(parents);
console.log(family);
console.log('---------------------------');

// 4
family.push('Dimon','Lolo');
console.log(family);
console.log('---------------------------');

// 5
family.reverse();
console.log(family);
console.log('---------------------------');
// 6
const Mother = family[4];
console.log(Mother);
console.log('---------------------------');
// 7
console.log(parents.splice(1,1,'Josef'));
console.log(parents);
console.log('---------------------------');



