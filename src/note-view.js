(function(exports) {
    function NoteView(note) {
        this.note = note
        this.shortNote
    }

    NoteView.prototype.noteRender = function() {
        this.shortNote = this.note.read().slice(0, 20);
        return "<div> " + this.shortNote + " </div>"
    }

    NoteView.prototype.noteRenderLong = function() {
        return "<div> " + this.note.read() + " </div>"
    }

    NoteView.prototype.text = function() {
        return this.shortNote
    }

    exports.NoteView = NoteView;
})(this);