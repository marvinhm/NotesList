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
            if(noteHtml === testHtml) {
                console.log("Test: 'htmlIsEq' has passed!");
            } else {
                throw new Error('Assertion Failed: ' + noteHtml + " does not match the test html");
            }
        }
    };
    
    exports.assert = assert;
})(this);

