function testNotepadCreation() {
  var notepad = new Notepad();
  assert.isTrue("New notepad is empty", notepad.notes.length === 0);
};

testNotepadCreation();

function testAddNoteToNotePad() {

  function FakeNote(description){
    this.description = description;
  };

  var notepad = new Notepad();
  var note = new FakeNote();
  notepad.addNote(note);
  assert.isTrue("Note is added to notepad",notepad.notes[0] === note);
};

testAddNoteToNotePad();

function testReturnNotes(){

  function FakeNote(description){
    this.description = description;
  };

  var notepad = new Notepad();
  var note1 = new FakeNote("Hi Keran");
  var note2 = new FakeNote("Hi Tom");
  notepad.addNote(note1);
  notepad.addNote(note2);
  var test = notepad.returnNotes();
  assert.isTrue("First note is returned", test[0] === note1);
  assert.isTrue("Second note is returned", test[1] === note2);
};

testReturnNotes();

function testGetNoteFromNotepadByID(){

  function FakeNote(description, id){
    this.description = description;
    this.id  = id;
  };

  var notepad = new Notepad();
  var note1 = new FakeNote("Hi Ellie", 0);
  var note2 = new FakeNote("Hi Citrus", 1);
  // notepad.addNote(new FakeNote("Hi Ellie"));
  // notepad.addNote(new FakeNote("Hi Citrus"));
  notepad.addNote(note1);
  notepad.addNote(note2);

  test = notepad.getNoteByID(1);

  assert.isTrue("Gets the note with ID 1", test === note2)
};

testGetNoteFromNotepadByID();
