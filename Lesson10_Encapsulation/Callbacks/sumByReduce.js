function sumByReduce() {
  var accounts = [
    {
      name: 'Arvid',
      money: 200
    },
    {
      name: 'Diana',
      money: 201
    },
    {
      name: 'Dasha',
      money: 200.5
    }
  ];
  
  var sumOfMoney = accounts.reduce(function (sum, person) {
    return sum + person.money;
  }, 0);
  
  console.log(sumOfMoney);
}

export default sumByReduce;