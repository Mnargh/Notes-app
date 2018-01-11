function testNoteListViewContainsNotePad() {
  var notepad = new Notepad();
  var notelistview = new NotelistView(notepad);
  assert.isTrue("Notelist contains notepad", notelistview.currentNotepad === notepad);
};

testNoteListViewContainsNotePad();

function testReturnsNoteListView() {

  function FakeNote(description){
    this.description = description;
  };

  var note1 = new FakeNote("Hi Keran");
  var note2 = new FakeNote("Hi Tom");
  var notepad = new Notepad();
  notepad.addNote(note1);
  notepad.addNote(note2);
  var notelistview = new NotelistView(notepad);
  var test = notelistview.returnToHTML();
  assert.isTrue("Returning notes", test === "<ul><li>Hi Keran</li><li>Hi Tom</li></ul>")
};

testReturnsNoteListView();

function testReturnsNoteListViewWith20Chars() {

  function FakeNote(description){
    this.description = description;
  };
  
  var note1 = new FakeNote("asdfgasdfgasdfgasdfgqwert");
  var note2 = new FakeNote("asdfgasdfgasdfgasdfgpoiuypoiuy poiuypoiuypoiuy");
  var notepad = new Notepad();
  notepad.addNote(note1);
  notepad.addNote(note2);
  var notelistview = new NotelistView(notepad);
  var test = notelistview.returnToHTML();
  assert.isTrue("Limits notes to 20 characters", test === "<ul><li>asdfgasdfgasdfgasdfg</li><li>asdfgasdfgasdfgasdfg</li></ul>")
};

testReturnsNoteListViewWith20Chars();
