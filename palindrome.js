// Basic programming example of detecting Palindromes using an array stack

/*
 *  Palindrome Class
 */
function Palindrome(word) {
  this.inputString = word;
  this.originalArray = new Array(word.length);
  this.reversedArray = new Array(word.length);
  this.isMatch = false;
  this.runTest();
}

// The 'Palindrome' class inherits from the Stack class.
Palindrome.prototype = new Stack();

Palindrome.prototype.runTest = function() {
  // Make sure inputString isn't empty
  if (this.inputString !== '') {
    // Call the Palindrome stack method to set originalArray
    this.stack();
    // Call the Palindrome unstack method to set originalArray
    this.unstack();
    // Run the test for a match
    this.isMatch = this.testMatch();
  } else {
    this.isMatch = undefined;
  }
}

Palindrome.prototype.stack = function() {
  // Push each character of input string to the stack
  for(var key in this.inputString) {
    Palindrome.prototype.push(this.inputString[key]);
  }
  // Set Palindrome originalArray member to the resultant stack
  // by calling inherited getSlack method
  this.originalArray = Palindrome.prototype.getStack();
  console.debug("Original array:", this.originalArray);
}

Palindrome.prototype.unstack = function() {
  // Push each character of input string to the stack
  for (var key in this.inputString) {
    // Set Palindrome reversedArray at index `key` to the popped char object
    this.reversedArray[key] = Palindrome.prototype.pop();
  }
  console.debug("Reverse array:", this.reversedArray);
}

Palindrome.prototype.testMatch = function() {
  console.info("Comparing", this.originalArray, "to", this.reversedArray);
  // If the two arrays are different lengths, no match.
  if (this.originalArray.length != this.reversedArray.length) {
    return false;
  }
  for (var key in this.originalArray) {
    // If the char at the same index in both arrays are not equivalent, no match
    if (this.originalArray[key] != this.reversedArray[key]) {
      return false;
    }
  }
  // Otherwise, return true (note: not a good way of doing this)
  return true;
}

