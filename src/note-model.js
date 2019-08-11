(function(exports) {
    function Notes(note) {
        this.text = note
        this.id = 0
    };

    Notes.prototype.read = function() {
        return this.text
    };

    Notes.prototype.getId = function() {
        return this.id
    };

    Notes.prototype.addID = function(id) {
        this.id = id
    }

    exports.Notes = Notes;
})(this);