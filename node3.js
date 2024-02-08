// Problem-03:

function deleteInvalids(array) {
    if (typeof array === 'object' && array !== null && Array.isArray(array)) {
        return array.filter(num => typeof num === "number" && !isNaN(num))
    } else {
       return "Invalid Array";
    }
  
}



const array ="Alok";
const result = deleteInvalids(array);
console.log(result);