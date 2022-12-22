const boyz = ['Vasja', 'Petja', 'Vova'];

const [boy1, boy2] = boyz;

// const boy1 = boyz[0];
// const boy2 = boyz[1];

console.log(boy1);
console.log(boy2);

const dude = {
  name: 'Petusek',
  age: 39,
  legs: 1.5,
  job: 'hand'
}

const { age: dudeAge, job, legs } = dude;

console.log(dudeAge, legs);

const showBoyz = (first, second) => first + ' and ' + second;
const myBoyz = showBoyz(...boyz); // spread operator
console.log('My boyz: ' + myBoyz);

const newBoyz = ['Nikita', 'Robin bad', ...boyz];
console.log('New boyz', newBoyz);

const richGuyProperties = {
  car: 'Ferrari',
  house: 'villa',
  boat: 'yacht',
  kidneys: 1
}

const upgradedDude = {
  ...dude,
  ...richGuyProperties
}

console.log('Upgraded dude', upgradedDude);