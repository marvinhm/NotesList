(function() {
  var notes = new Notes("First note!");
  var notes2 = new Notes("First Second Third Fourth Fifth Sixth Seventh Eighth");
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
      return {
        name: "<ul> <div><li>Favourite drink: seltzer </li></div> <div><li>Favourite food: bbq </li></div> <div><li>Favourite dessert: apple pie </li></div> </ul>"
      }
    }
    assert.controllerExists(controller);
    console.log(controller.getNotes().name);
    // assert.htmlIsEq(controller.getNotes().name, document.getElementById('app').innerHTML);
  }

  function testSingleNoteView() {
    var noteView = new NoteView(notes);
    assert.toReturnInHtml(noteView.noteRender(notes))
  }

  function testNoteFirstTwentyChars() {
    var noteView = new NoteView(notes2);
    noteView.noteRender();
    assert.firstTwenty(noteView.text())
  }

  function testForNoteId() {
    instantiate.hasNoteId(notes);
  }

  function testForNoteUrl() {

    
    assert.noteViewUrl();
  }

  testNoteDefaults();
  testNoteListHoldsNotes();
  testNoteListView();
  testNoteController();
  testSingleNoteView();
  testNoteFirstTwentyChars();
  testForNoteId();
  // testForNoteUrl();
  
})(this);