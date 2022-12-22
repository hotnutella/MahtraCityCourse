//Compound interest calculator

function interestCalcul (loan, years, interest) {
    var decimals = 2;
    var rounder = 10 ** decimals;
    var calc = loan * (1 + interest / 100);
    var roundedLoan = Math.round(calc * rounder) / rounder;
    if (years === 1) {
        return roundedLoan;
    }
    return interestCalcul (roundedLoan, years-1, interest);
}

console.log(interestCalcul(3000, 5, 2));