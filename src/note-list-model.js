(function(exports) {
    function NoteList() {
        this.list = []
        this.identityIterator = 0
        
    }

    NoteList.prototype.create = function(text) {
        var newNote = new Notes(text);
        newNote.addID(this.identityIterator);
        this.list.push(newNote);
        this.identityIterator += 1;
    }

    NoteList.prototype.all = function() {
        console.log(this.list);
        return this.list;
    }
    exports.NoteList = NoteList;
})(this);