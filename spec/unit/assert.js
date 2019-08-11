(function(exports) {
    var assert = {
        isTrue: function(assertionOfSorts) {
            if(!assertionOfSorts) {
              throw new Error("Assertion failed: " + assertionOfSorts + " is not a truthy value.");
            } else {
              console.log("Test: isTrue has passed!");
            }
        },
        isAnArray: function(assertionOfSorts) {
            if (!Array.isArray(assertionOfSorts)) {
              throw new Error('Assertion Failed: ' + assertionOfSorts + " is not an array");
            } else {
              console.log("Test: 'isAnArray' has passed!");
            }
        },
        toReturnInHtml: function(assertionOfSorts) {
            if(typeof assertionOfSorts === 'string' && assertionOfSorts.split('')[0] === '<' && assertionOfSorts.split('')[assertionOfSorts.length-1] == '>') {
              console.log("Test: 'toReturnInHtml' has passed!");
              console.log("Contents of the HTML: ", assertionOfSorts);

            } else {
              throw new Error('Assertion Failed: ' + assertionOfSorts + " have not been transformed into HTML");
            }
        },
        controllerExists: function(controller) {
            if(controller instanceof NoteController) {
              console.log("Test: 'controllerExists' has passed");
            } else {
              throw new Error('Assertion Failed: ' + controller + " is not an instance of NoteController");
            }
        },
        htmlIsEq: function(noteHtml, testHtml) {
            // console.log("TEST: ", testHtml);
            if(noteHtml === testHtml) {
              console.log("Test: 'htmlIsEq' has passed!");
            } else {
              throw new Error('Assertion Failed: ' + noteHtml + " does not match the test html");
            }
        },
        firstTwenty: function(note) {
            if(note.length > 20) {
              throw new Error('Assertion Failed: ' + note + " is too long (20 characters min)");
            } else {
              console.log("Test: 'firstTwenty' has passed!");
            }
        },
        noteViewUrl: function(url) {
            if(url.split('#')[1].split('/').includes('notes')) {
              throw new Error('Assertion Failed: ' + url + " does not match up to a unique link");
            } else {
              console.log("Test: 'noteViewUrl' has passed!");
            }
        }
    };
    
    exports.assert = assert;
})(this);

