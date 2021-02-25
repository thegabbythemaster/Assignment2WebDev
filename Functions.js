// Practical Web Dev
// Team Foodies - Samantha Ngo, Gabby Gonzalez, Kristy Lau, Nirmala Kuhl
// Assignment #2
// 2021-02-19

// NIRMALA'S FUNCTIONS -------------------------------------------------------------------------------------------------------------------------
// functions go here
Array.prototype.myForEach = function(callback){
	// try to execute "callback" on the first element of this array
  	for(let i=0; i<this.length; i++){
		callback(this[i],i,this);
    }
   
};

const array1 = [1, 2, 3, 4];
array1.myForEach( function(element){ console.log(element)} );

Array.prototype.myMap = function(callback){
  	newArray=[]
	for(let i = 0; i< this.length; i++){
		newArray.push(callback(this[i]))
    }
  	return newArray
}


const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.myMap(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

Array.prototype.myFilter = function(callback){
	newArray=[]
    for(let i=0; i<this.length; i++){ //for every word
		if (callback(this[i])){       //check if it matches the function
          	newArray.push(this[i])    //insert in new array
        }
    }
    return newArray
};

// KRISTY'S FUNCTIONS -------------------------------------------------------------------------------------------------------------------------
/*
 * some() (aka any())
 * The some() method tests whether at least one element in the array passes the test implemented by the provided function.
 * It returns a Boolean value.
 * Takes three arguments: current value, index, array
*/
Array.prototype.mySome = function(callback){
  for(let i = 0; i < this.length; i++) {
      //if callback returns true for any element, return true
     if(callback(this[i], i, this)) {
         return true;
     }
  }
  //none of the elements pass the callback test
  return false;
};

/*
* every()
* The every() method tests whether all elements in the array pass the test implemented by the provided function.
* It returns a Boolean value.
* Takes three arguments: current value, index, array
*/
Array.prototype.myEvery = function(callback){
  for(let i = 0; i < this.length; i++) {
      //if callback returns false for any element, return false
      if(!callback(this[i], i, this)) {
          return false;
      }
  }
  //all elements pass the callback test
  return true;
};

/*
* reduce()
* The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
* Takes four arguments: accumulator, current value, current index, source array
*/
Array.prototype.myReduce = function(callback, initialValue){
  //let accumulator be equal to either the initialValue given or
  //this at the 0th index
  //If an initialValue isn't given, it will be set equal to this[0]
  let accumulator = initialValue || this[0];
  
  let i;
  //If an initialValue was given, reduce() will start at index 0
  //If an initialValue was not given, reduce() will start at index 1
  if(initialValue) {
      i = 0;
  } else {
      i = 1;
  }

  for(; i < this.length; i++) {
      //accumulate the value by calling the given function
      accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};


// GABBY'S FUNCTIONS ----------------------------------------------------------------------------------------------------------------------------
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

// SAMANTHA'S FUNCTIONS ----------------------------------------------------------------------------------------------------------
// Returns the index of the first character of the last instance of the target string.
// Params: searchVal - str indicating value to search for
// Returns: index of the first character of the last instance of the target string and -1 if not found
String.prototype.myLastIndexOf = function(searchVal){
  let valLen = searchVal.length;
  let lastIndex = -1;
  for(let i = 0; i < this.length-valLen; i++){
    if(this.slice(i, i+valLen) == searchVal){
      lastIndex = i;
    }
  }
  return lastIndex;
}

// // Tests
// let testStr = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
// console.log(testStr.myLastIndexOf("dog")) // Should be 52
// console.log(testStr.myLastIndexOf("pumpkin")) // Should be -1
// testStr = ""
// console.log(testStr.myLastIndexOf("pumpkin")) // Should be -1

// Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would
// Params: obj - object
// Returns: an array of the object's keys
Object.prototype.grabKeys = function() {
  let keys = [];
  for (const key in this){
    if (this.hasOwnProperty(key)){
      keys.push(key);
    }
  }
  return keys;
}

// Returns an array of a given object's own enumerable property values, iterated in the same order that a normal loop would
// Params: obj - object
// Returns: an array of the object's values
Object.prototype.grabValues = function() {
  let values = [];
  for (const key in this){
    if (this.hasOwnProperty(key)){
      values.push(this[key]);
    }
  }
  return values;
}

// Tests
let testObj = {
                "apple": "red",
                "blueberry":"blue",
                "strawberry": "red",
                "pineapple": "yellow",
                "number": 14
              };
let testEmptyObj = {};

// Tests
// console.log("Test 1:", testObj.grabKeys()) // Should be ["apple", "blueberry", "strawberry", "pineapple", "number"]
// console.log("Test 2:", testEmptyObj.grabKeys()) // Should be []
// console.log("Test 3:", testObj.grabValues()) // Should be ["red", "blue", "red", "yellow"]
// console.log("Test 4:", testEmptyObj.grabValues()) // Should be []

