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
