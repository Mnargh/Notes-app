(function(exports) {
  function NotelistView(notepad) {
    this.currentNotepad = notepad;
  };

  NotelistView.prototype.returnToHTML = function() {
    var list = this.currentNotepad.returnNotes()
    .map(note => note.description.substring(0,20))
    .join('</li><li>');
    return '<ul><li>' + list + '</li></ul>';
  };

  exports.NotelistView = NotelistView;
})(this);
