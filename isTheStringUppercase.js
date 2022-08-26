//instructions
///Create a method to see whether the string is ALL CAPS.


///solution


String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
  }