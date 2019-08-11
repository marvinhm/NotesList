


(function(exports) {
  function NoteController(noteList) {
    this.listHtml = new NoteListView();
    this.list = noteList.all();
    noteList.create("Favourite drink: seltzer");
    noteList.create("Favourite food: bbq");
    noteList.create("Favourite dessert: apple pie");


  }

  // NoteController.prototype.insertList = function() {
  //   this.listHtml.
  // }

  NoteController.prototype.getNotes = function() {
    // console.log(this.listHtml.getHTML(this.list));
    return document.getElementById('app').innerHTML = this.listHtml.getHTML(this.list);
  }

  NoteController.prototype.getNote = function(index) {
    var note = this.list[index];
    var noteView = new NoteView(note);
    return noteView.noteRenderLong();
  }
  
  noteList = new NoteList();
  example = new NoteController(noteList);
  example.getNotes();

  exports.NoteController = NoteController;

})(this);