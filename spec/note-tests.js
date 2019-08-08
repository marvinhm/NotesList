(function() {
  var notes = new Notes("First note!");
  var noteList = new NoteList();
  var listView = new NoteListView();



  function testNoteDefaults() {
    // var notes = new Notes("First note!");
    instantiate.exists(notes.read(), "First note!")
  }

  function testNoteListHoldsNotes() {
    // var noteList = new NoteList();
    var text = "Good Morning!"
    var text2 = "Good Afternoon!"
    var text3 = "Good Night!"

    noteList.create(text);
    noteList.create(text2);
    noteList.create(text3);

    assert.isAnArray(noteList.all());
  }

  function testNoteListView() {
    // var listView = new NoteListView();
    assert.toReturnInHtml(listView.getHTML(noteList.all()));
  }

  function testNoteController() {
    var nList = new NoteList();
    // var html = document.getElementById('test').innerHTML;
    var controller = new NoteController(nList);
    controller.getNotes = function() {
      return document.getElementById('app').innerHTML;
    }
    assert.controllerExists(controller);
    assert.htmlIsEq(controller.getNotes(), document.getElementById('app').innerHTML);
  }

  testNoteDefaults();
  testNoteListHoldsNotes();
  testNoteListView();
  testNoteController();
})(this);