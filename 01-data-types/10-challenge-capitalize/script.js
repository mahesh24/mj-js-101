// Create a new string called "mjNewString" that holds the value of "Developer", using the lowercase value from "mjString"
const mjString = 'developer';

let mjNewString;

// Solution 1:
mjNewString = mjString.charAt(0).toUpperCase() + mjString.substring(1);
// Solution 2:
mjNewString = mjString[0].toUpperCase() + mjString.substring(1);
// Solution 3:
mjNewString = `${mjString[0].toUpperCase()}${mjString.slice(1)}`;

console.log(mjNewString);