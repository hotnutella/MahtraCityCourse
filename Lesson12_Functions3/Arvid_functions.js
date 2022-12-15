var balls = [
    'red',
    'green',
    'blue',
    'green',
    'green',
    'red',
    'green',
    'green',
    'blue',
    'blue',
    'blue',
    'red',
    'blue',
    'blue',
    'red',
    'red',
    'red',
    'red',
    'blue',
    'blue',
    'green',
    'green'
  ];

    function howMany(color) {
        var i = 0;
        var quantity = balls.map(function (ballColor) {
            return ballColor === color;
            })
            quantity.filter(function (q){
                if (q === true) {
                    i++;
                }
                return i;
            })
            console.log(i);
    }

  
  howMany('green');
  howMany('red');
  howMany('blue');
