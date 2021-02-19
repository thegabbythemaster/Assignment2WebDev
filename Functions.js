/*The includes() method determines whether an array includes 
a certain value among its entries, returning true or false as 
appropriate.

Parameters
valueToFind
The value to search for.
fromIndex (Optional)
The position in this array at which to begin searching for valueToFind.

Return value
A Boolean which is true if the value valueToFind
is found within the array (or the part of the array 
indicated by the index fromIndex, if specified).
*/



/*
const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
  
  console.log(power(2, 10));
  // → 1024
 
*/
//INCLUDES
Array.prototype.myIncludes = function(valueToFind){
    for(let i = 0; i< this.length; i++){
        if(this[i] == valueToFind){
            return true;
        }
    }
    return false;
};

const arr = [1, 2, 3];
console.log(arr.myIncludes(1));


