(function(exports) {
    var assert = {
        isTrue: function(assertionOfSorts) {
            if(!assertionOfSorts) {
                throw new Error("Assertion failed: " + assertionOfSorts + " is not a truthy value.");
            } else {
                console.log("That's a PASS!");
            }
        },
        arrayIncludes: function(assertionOfSorts, text) {
            if (!Array.isArray(assertionOfSorts)) {
                throw new Error('Assertion Failed: ' + assertionOfSorts + " is not an array");
            } else {
                if (assertionOfSorts.includes(text)) {
                    console.log("Test Passed!");
                } else {
                    throw new Error('Assertion Failed: ' + assertionOfSorts + " is included in the array");
                }
            }
        }
    };
    
    exports.assert = assert;
})(this);

