function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input";
    }
    const totalIncome = arr.reduce((acc, curr) => acc + curr, 0);
    const totalTax = totalIncome >= 3000 ? 0.2 * (totalIncome - 3000) : 0;
    const netIncome = totalIncome - totalTax;
    const savings = netIncome - livingCost;
    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000)); 
console.log(monthlySavings(100, [900, 2700, 3400]));