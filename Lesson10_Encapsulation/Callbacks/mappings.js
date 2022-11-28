var nameMapping = {
  'Arvid': 'Diana',
  'Deniss': 'Dasha',
  'Tyrion': 'Vse muziki na etoj planete'
};

export default function mappings() {
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
  
  var names = accounts.map(function (person) {
    return person.name + ' has ' + person.money + ' money';
  });
  
  var money = accounts.map(function (person) {
    return person.money;
  });
  
  console.log(names);
  console.log(money);
}