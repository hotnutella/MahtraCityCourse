function aloha (times) {
  if (times <= 0) {
    return false;
  }
  console.log('ALOHA');
  aloha(times - 1);
}

aloha(10);