
function makeUrlChangeNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};
function showNoteForCurrentPage() {
  var location = window.location;
  showNote(getNoteFromUrl(location));
};

function getNoteFromUrl(location) {
  console.log('URL: ', location);
  return location.href.split("#")[1];
};



function showNote(noteId) {
  var list = new NoteList();
  var nc = new NoteController(list)
  document
  .getElementById("app2")
  .innerHTML = nc.getNote(noteId);
};

makeUrlChangeNoteForCurrentPage();
