// import { assert } from "./assert";

// import { instantiate } from "./instantiate";

(function() {
  function testNoteDefaults() {
    var notes = new Notes("First note!");
    instantiate.exists(notes.all(), "First note!")
  }

  function testNoteListHoldsNotes() {
    var noteList = new NoteList();
    var text = "Good Morning!"
    noteList.create(text);
    assert.arrayIncludes(noteList.all(), text);
  }

  testNoteDefaults();
  testNoteListHoldsNotes();
})(this);