(function(exports) {
  function SingleNoteView(note) {
    this.currentnote = note;
  };

  SingleNoteView.prototype.returnNoteHTML = function(){
    return '<div>' + this.currentnote.description + '</div>';
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
