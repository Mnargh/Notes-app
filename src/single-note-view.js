(function(exports) {
  function SingleNoteView(note) {
    this.currentnote = note;
  };

  SingleNoteView.prototype.ReturnNoteHTML = function(){
    return '<li>' + this.currentnote.description + '</li>';
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
