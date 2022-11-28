function filters() {
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
  
  var filteredAccounts = accounts.filter(function (person) {
    return person.money === 200;
  });
  console.log(filteredAccounts); 
}

export default filters;