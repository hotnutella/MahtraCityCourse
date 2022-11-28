export function snow () {
  console.log('Winter is coming!');
}

export function wind () {
  console.log('Welcome to the desert!');
}

export function rain (callback = null) {
  console.log('Almost winter!');
  
  if (callback) {
    callback();
  }  
}