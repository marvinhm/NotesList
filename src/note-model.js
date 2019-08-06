(function(exports) {
    function Notes(note) {
        this.text = note
    };

    Notes.prototype.read = function() {
        return this.text
    };

    exports.Notes = Notes;
})(this);