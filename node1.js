// // Problem -01 : Help The Zoo Manager


function calculateMoney(Ticket) {
    if(Ticket < 0) {
        return "Invalid Number";
    }
    const priceTicket = 120;
    const dailyExpenseTicket = 500;
    const lunchExpensePerStaff = 50 * 8;

    const totalIncome = Ticket * priceTicket;
    const totalDailyExpense = dailyExpenseTicket + lunchExpensePerStaff;
    const profit = totalIncome - totalDailyExpense;
    return profit;
}





const Ticket = 10;
console.log(calculateMoney(Ticket));

