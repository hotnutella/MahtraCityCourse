var a = 10;
var b = 30;

brainfuck(a, b);


function brainfuck(first, second) {
  
  if (first > 7) {
    var c = 0;
    c = first * 2;
  } else {
    c = second;
  }

  //console.log(c);
  return c;
}

var d = 20;

function Dee() {
  console.log(d);
  var d = 6;
}
Dee();
console.log(d);