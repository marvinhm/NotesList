(function(exports) {
    var assert = {
        isTrue: function(assertionOfSorts) {
            if(!assertionOfSorts) {
                throw new Error("Assertion failed: " + assertionOfSorts + " is not a truthy value.");
            } else {
                console.log("That's a PASS!");
            }
        }
    };
    
    exports.assert = assert;
})(this);

