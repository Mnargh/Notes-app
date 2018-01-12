(function(exports) {
  function NotelistView(notepad) {
    this.currentNotepad = notepad;
  };

  NotelistView.prototype.returnToHTML = function() {
    var list = this.currentNotepad.returnNotes()
    .map((note) => {
      return '<li><a href="#notes/' + note.id + '">' +
      note.description.substring(0,20) + "</a></li>"
    }).join("");
    return "<ul>" + list + "</ul>";
  };
  //   var list = ""
  //   for(var i=0; i<this.currentNotepad.notes.length; i++){
  //     list += '<li><a href="#notes/' + this.currentNotepad.notes[i].id + '">' + this.currentNotepad.notes[i].description.substring(0,20) + '</a></li>';
  //   }
  //   return "<ul>" + list + "</ul>";
  // };

  exports.NotelistView = NotelistView;
})(this);
