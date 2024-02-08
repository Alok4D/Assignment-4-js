function monthlySavings(array, livingCost) {
    let amount = [];
    if (!Array.isArray(array) || typeof livingCost !== 'number') {
        return "invalid input";
    }
    array.filter(taka => {
        if (taka >= 3000) {
            const tax = taka - (taka * 0.2);
            amount.push(tax)
        }
        else {
           amount.push(taka)
        }
    })
    const totalAmount = amount.reduce((acc, curr) => acc + curr, 0);
    const savings = totalAmount - livingCost;
    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}



// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
