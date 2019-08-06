(function(exports) {
  function NoteListView() {
    
  }

  NoteListView.prototype.getHTML = function(list) {
    var newlist = list.map(function(element) { return "<div><li>" + element.read() + " </li></div>" })
    return "<ul> " + newlist.join(" ") + " </ul>"
  }

  exports.NoteListView = NoteListView;
})(this);