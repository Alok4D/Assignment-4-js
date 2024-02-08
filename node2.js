// Problem-02: Good Name, Bad Name


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



console.log(checkName(12));
console.log(checkName('Salman'));
console.log(checkName('Jhankar'));
console.log(checkName('Alok'));

