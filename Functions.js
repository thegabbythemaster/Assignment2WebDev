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
//TEST
const arr1 = [1, 2, 3];
console.log(arr1.myIncludes(1));

/*
The indexOf() method returns the first index at which a given element can be found in the array,
 or -1 if it is not present.

Parameters
searchElement
Element to locate in the array.
fromIndex Optional
The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, 
which means the array will not be searched. If the provided index value is a negative number, 
it is taken as the offset from the end of the array.

Return value
The first index of the element in the array; -1 if not found.

*/
Array.prototype.myIndexOf = function(searchElement){
    for(let i = 0; i<this.length; i++){
        if(this[i] == searchElement){
            return i;
        }
    }
    return -1;
};
//TESTING
const arr2 = ['cat','dog','bird'];
console.log(arr2.myIndexOf('raccoon'));

/*
The push() method adds one or more elements to the end of an array and returns the new length of the array.
Parameters
elementN
The element(s) to add to the end of the array.
Return value
The new length property of the object upon which the method was called.
Description
The push method appends values to an array.

push is intentionally generic. This method can be used with call() or apply() 
on objects resembling arrays. The push method relies on a length property to 
determine where to start inserting the given values. If the length property cannot be 
converted into a number, the index used is 0. This includes the possibility of length 
being nonexistent, in which case length will also be created.
*/

Array.prototype.myPush = function(elementN){
        this[this.length] = elementN;
        console.log(this);
        let count =  0;
    for(let i = 0; i<this.length; i++){
        count++;
    }
    return count;
};


let arr3 = [1, 2, 3, 4];
//TESTING
console.log(arr3.myPush(5));
console.log(arr3.myPush(6));
console.log(arr3.myPush(7));