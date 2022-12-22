let myName = '';

for (let i = 0; i < 3; i++) {
  myName = 'Name nr ' + i;
  console.log(myName);
}

const myNewName = 'Petja';
//myNewName = 'Vasja';
console.log(myNewName);

for (let i = 0; i < 4; i++) {
  console.log(i);
}

const names = ['Vasja', 'Petja']; // All objects should be const
names.push('Vova');
for (const name of names) {
  console.log(name);
}

let a = 'slovo a';
let b = 'slovo b';

b = 'slovo b+';

const c = [a, b];
c.push('slovo e');
c[0] = 'slovo a+';

for (const slovo of c) {
  console.log(slovo);
}