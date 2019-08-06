(function(exports) {
  var instantiate = {
      exists: function(variable, text) {
        if (variable !== text) {
          throw new error("Instantiation failed: " + variable + " doesn't exist");
        } else {
            console.log("Test: 'exists' has passed!")
        }
      }
  }

  exports.instantiate = instantiate;
})(this);