

function creditPaymentTotal (loan, years, procent) {
    if (years === 0) {
        return loan;
    }
    
    return creditPaymentTotal();
}


var result = creditPaymentTotal(5500, 5, 9); 
console.log(result); 