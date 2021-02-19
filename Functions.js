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


// SAMANTHA'S FUNCTIONS ----------------------------------------------------------------------------------------------------------
// Returns the index of the first character of the last instance of the target string.
// Params: searchVal - str indicating value to search for
// Returns: index of the first character of the last instance of the target string and -1 if not found
String.prototype.myUnshift = function(searchVal){
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
// console.log(testStr.myUnshift("dog")) // Should be 52
// console.log(testStr.myUnshift("pumpkin")) // Should be -1
// testStr = ""
// console.log(testStr.myUnshift("pumpkin")) // Should be -1

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

