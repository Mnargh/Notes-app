function testNoteListViewContainsNotePad() {
  var notepad = new Notepad();
  var notelistview = new NotelistView(notepad);
  assert.isTrue("Notelist contains notepad", notelistview.currentNotepad === notepad);
};

testNoteListViewContainsNotePad();

function testReturnsNoteListView() {

  function FakeNote(description, id){
    this.description = description;
    this.id  = id;
  };

  var note1 = new FakeNote("Hi Keran", 0);
  var note2 = new FakeNote("Hi Tom", 1);
  var notepad = new Notepad();
  notepad.addNote(note1);
  notepad.addNote(note2);
  var notelistview = new NotelistView(notepad);
  var test = notelistview.returnToHTML();
  assert.isTrue("Returning notes", test === '<ul><li><a href="#notes/0">Hi Keran</a></li><li><a href="#notes/1">Hi Tom</a></li></ul>')

};

testReturnsNoteListView();

function testReturnsNoteListViewWith20Chars() {

  function FakeNote(description, id){
    this.description = description;
    this.id  = id;
  };

  var note1 = new FakeNote("asdfgasdfgasdfgasdfgqwert", 0);
  var note2 = new FakeNote("asdfgasdfgasdfgasdfgpoiuypoiuy poiuypoiuypoiuy", 1);
  var notepad = new Notepad();
  notepad.addNote(note1);
  notepad.addNote(note2);
  var notelistview = new NotelistView(notepad);
  var test = notelistview.returnToHTML();
  assert.isTrue("Limits notes to 20 characters", test === '<ul><li><a href="#notes/0">asdfgasdfgasdfgasdfg</a></li><li><a href="#notes/1">asdfgasdfgasdfgasdfg</a></li></ul>')

};

testReturnsNoteListViewWith20Chars();
