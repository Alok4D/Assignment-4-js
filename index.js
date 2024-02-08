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


function checkName(name) {
    if(typeof name !== "string") {
        return "invalid";
    }
    var lastLetter = name[name.length - 1];
    if (lastLetter === 'a' || lastLetter === 'y' || lastLetter === 'i' || lastLetter === 'e' || lastLetter === 'o' || lastLetter === 'u' || lastLetter === 'w') {
        return "Good Name";
    } 
    else{
        return "Bad Name";
    }
}


function deleteInvalids(array) {
    if (typeof array === 'object' && array !== null && Array.isArray(array)) {
        return array.filter(num => typeof num === "number" && !isNaN(num))
    } else {
       return "Invalid Array";
    }
  
}


function password(userBio) {
    if(!userBio.name || !userBio.siteName || !userBio.birthYear || userBio.birthYear.toString().length !== 4 || typeof userBio.birthYear !== "number"){
        return "invalid";
    }
    const name = userBio.name;
    const birthYear = userBio.birthYear;
    // const year = birthYear.toString();
    const siteName = userBio.siteName;
    const firstLetter = siteName.charAt(0).toUpperCase();
    const letter = firstLetter + siteName.slice(1);
    let Password = letter + '#' + name + '@' + birthYear;
    return Password;
}


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