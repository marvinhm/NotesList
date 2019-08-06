(function (exports) {
  var instantiate = {
      exists: function(variable, text) {
        if (variable !== text) {
          throw new error("Instantiation failed: " + variable + " doesn't exist");
        } else {
            console.log("Test Passed!")
        }
      }
  }

  exports.instantiate = instantiate;
})(this);