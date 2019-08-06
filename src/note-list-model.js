(function(exports) {
    function NoteList() {
        this.list = []
    }

    NoteList.prototype.create = function(text) {
        
        this.list.push(new Notes(text));
    }

    NoteList.prototype.all = function() {
        return this.list;
    }
    exports.NoteList = NoteList;
})(this);