const removeFromArray = function(array, ...arg) {
   
   //using foreach function
    // const newArray=[];

    // array.forEach(element => {
    //         if(!arg.includes(element)){
    //             newArray.push(element);
    //         }
            
    //     });
    //     return newArray;

// using flter() function
    return array.filter(val => !arg.includes(val));
    
};

// Do not edit below this line
module.exports = removeFromArray;
