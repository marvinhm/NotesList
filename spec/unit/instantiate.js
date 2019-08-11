(function(exports) {
  var instantiate = {
      exists: function(variable, text) {
        if (variable !== text) {
          throw new error("Instantiation failed: " + variable + " doesn't exist");
        } else {
            console.log("Test: 'exists' has passed!")
        }
      },
      hasNoteId: function(note) {
        console.log(note);
        if(typeof note.id === 'undefined') {
            throw new Error('Assertion Failed: ' + note.id + " note has no id");
        } else {
          console.log("Test: 'hasNoteId' has passed!")
        }
    },
  }

  exports.instantiate = instantiate;
})(this);