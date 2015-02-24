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