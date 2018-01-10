function testNoteListViewContainsNotePad() {
  var notepad = new Notepad();
  var notelistview = new NotelistView(notepad);
  assert.isTrue("Notelist contains notepad", notelistview.currentNotepad === notepad);
};

testNoteListViewContainsNotePad();

function testReturnsNoteListView() {
  var note1 = new Note("Hi Keran");
  var note2 = new Note("Hi Tom");
  var notepad = new Notepad();
  notepad.addNote(note1);
  notepad.addNote(note2);
  var notelistview = new NotelistView(notepad);
  var test = notelistview.returnToHTML();
  assert.isTrue("Returning notes", test === "<ul><li>Hi Keran</li><li>Hi Tom</li></ul>")
};

testReturnsNoteListView();
