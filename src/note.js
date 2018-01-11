(function(exports) {
var id = 0;

  function Note(description) {
    this.description = description;
    this.id = id++;
  };
  exports.Note = Note;
})(this);
