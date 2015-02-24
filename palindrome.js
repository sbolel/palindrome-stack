// Basic programming example of detecting Palindromes using an array stack

/*
 *  Stack Class
 */
function Stack() {
  this.val = new Array();
  this.tail = 0;
  console.debug("Initialized Stack:",this.val,"Tail:",this.tail);
}

Stack.prototype.push = function(val) {
  this.val[this.tail] = val;
  this.tail++;
  console.debug(" - Pushed(",val,") Stack.value:",this.val," Stack.tail is now:",this.tail);
}

Stack.prototype.pop = function() {
    var poppedItem = this.val[this.tail-1];
    this.tail--;
    console.debug(" - Popped(",poppedItem,") Stack.value:",this.val," Stack.tail is now:",this.tail);
    return poppedItem; 
}

Stack.prototype.getStack = function() {
  return this.val;
}

Stack.prototype.isEmpty = function() {
  return this.tail == 0;
}


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


/*
 *  Page JavaScript
 */
// Change the value of the result <div> to a message.
function writeResultMessage(matchedBoolean, inputValue) {
  // Build result message string
  var resultMessage = "\"" + inputValue + "\"";
  if (typeof(matchedBoolean) != 'undefined') {
    if (matchedBoolean) {
      resultMessage += " is a palindrome :)";
    } else {
      resultMessage += " is NOT a palindrome :(";
    }
  } else {
    resultMessage = "You need to enter a word.";
  }
  // Write the message to html
  document.getElementById("palindromeResult").innerHTML = resultMessage;
}

// Button click listener
function clickCallback() {
  // Get the value of the HTML input element
  var input = document.getElementById("palindromeInput");
  var palindrome = new Palindrome(input.value);
  writeResultMessage(palindrome.isMatch, input.value);
}

// Page initialization function
function pageInit() {
  // Get the button HTML element
  var button = document.getElementById("palindromeButton");
  // Attach an event listener for button clicked to call 'clickCallback'
  if (button.addEventListener) {
      button.addEventListener("click", clickCallback);  //Modern browsers
  } else if (button.attachEvent) {
    button.attachEvent("onsubmit", callback);           //Old IE
  } else {
    console.error("Your browser does not support listeners.");
  }
}

// Call pageInit() when the window loads.
window.addEventListener("load", function load(event){
  window.removeEventListener("load", load, false); //remove listener, no longer needed
  pageInit();
},false);

