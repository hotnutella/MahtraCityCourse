
console.log(Diana());
//console.log(Arvid()); // Will throw an error

// 2
const Arvid = () => {
  return 'hochu deneg';
}

console.log(Arvid());

// 3
const Dasha = () => 'Dasha ne skazhet Circle K';
console.log(Dasha());

// 4
const Deniss = what => 'Hochu ' + what;
console.log(Deniss('otpusk'));

// 1
function Diana () {
  return 'nu pazjazja';
}

// -----------------
const money = [100, 200, 300, 700, 800];
const bigNotes = money.filter(amount => amount > 500);
console.log('Big notes: ', bigNotes);