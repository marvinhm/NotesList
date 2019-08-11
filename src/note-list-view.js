(function(exports) {
  function NoteListView() {
    
  }

  NoteListView.prototype.getHTML = function(list) {
    console.log(list);
    var newlist = list.map(function(element) { var ele = new NoteView(element); return "<div><a href='#" + element.getId() + "'><li>" + ele.noteRender() + " </li></a></div>" })
    return "<ul> " + newlist.join(" ") + " </ul>"
  }

  exports.NoteListView = NoteListView;
})(this);