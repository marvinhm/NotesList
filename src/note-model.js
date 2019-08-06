(function(exports) {
    function Notes(note) {
        this.text = note
    };

    Notes.prototype.all = function() {
        return this.text
    };

    exports.Notes = Notes;
})(this);