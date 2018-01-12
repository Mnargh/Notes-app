(function(exports) {

  NoteID.prototype.initID();

  function Note(description, element = NoteID) {
    this.description = description;
    this.id = element.prototype.getIDnumber();
    // console.log("This.id is");
    // console.log(this.id);
    element.prototype.increaseIDnumber();
  };
  exports.Note = Note;
})(this);
