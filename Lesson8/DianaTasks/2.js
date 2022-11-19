var items = [4, 7, -2, 10, -12, 18, ]

var list = 0;
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item > 0) {
        list += item
    };
  }; 

  console.log('summa = ' + list);