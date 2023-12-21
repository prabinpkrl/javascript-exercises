const reverseString = function(string) {
    // // using loop
    // let reversestring='';
    // for(var i=string.length-1; i>=0; i--){
    //     reversestring+=string[i];
    // }
    // return reversestring;


    //    using build in function 
    let splitstring=string.split('');
    let newarray=splitstring.reverse('');
    let reverseString=newarray.join('');
    return reverseString;

    // chaining
    // return string.split("").reverse().join("");

};

// Do not edit below this line
module.exports = reverseString;
