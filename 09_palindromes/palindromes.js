const palindromes = function (string) {
  // method 
    let palindromesString = string.toLowerCase().replace(/[^a-z0-9]/g, "")
    let resultplaindrome =palindromesString.split('').reverse().join('');
    
 // here we have return true or false by ourself as we are using '!==' or '===' expression.
    if(palindromesString !== resultplaindrome){
        return false;
    }
    
    return true;

    // OR directly method
        //     const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
// here '==' means it is boolean expression itself so it return true or false.
        //   return processedString.split("").reverse().join("") == processedString; 

};

// Do not edit below this line
module.exports = palindromes;
