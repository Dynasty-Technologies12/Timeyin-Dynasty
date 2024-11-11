function multiply (x,y) {
    return x * y;
}
let result = multiply (4, 7);
console.log(result);

function describePerson (name, age = 36) {
    return `${name} is ${age} years old`;
}
let report = describePerson("Theresa", age = 36);
console.log(report);

function largestNumber (x, y, z) {
    return Math.max(x, y, z);
}
let largeNumber = largestNumber(20, 70, 40);
console.log(largeNumber);

function isLeapYear (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
let statement = isLeapYear(2022);
console.log(statement);

function concatStrings (str1, str2) {
    return `${str1} ${str2}`;
}
let linkedStatement = concatStrings("Great", "Year");
console.log(linkedStatement);