(function(exports) {
  function Notepad() {
    this.notes = [];
    // this.noteDescriptions = [];
    // for (var i = 0; i < notes.length; i++) {
    //   this.noteDescriptions.push(this.notes[i].description);
    // }
  };

  Notepad.prototype.createNote = function(description, note = new Note(description)){
    this.addNote(note);
  };


  Notepad.prototype.addNote = function(note) {
    this.notes.push(note);
  };

  Notepad.prototype.returnNotes = function() {
    // this.notes.forEach(function(note){
    //   return note;
    // });
    return this.notes;
  };

  Notepad.prototype.getNoteByID = function(IDnumber){
    return this.notes.find(function(element){
      return element.id === IDnumber;
    })
    // console.log("before");
    // console.log(arr);
    // console.log("after");
    // return arr;
  };


  exports.Notepad = Notepad;
})(this);
