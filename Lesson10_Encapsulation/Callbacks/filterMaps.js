function filterMaps() {
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
  
  var PersonNameStartingWithDWithLessThan201 = accounts
    .filter(function (person) {
      return person.money < 201;
    })
    .filter(function (person) {
      return person.name[0] === 'D';
    })
    .map(function (person) {
      return person.name;
    })
    .shift();
  
  console.log(PersonNameStartingWithDWithLessThan201);
}

export default filterMaps;