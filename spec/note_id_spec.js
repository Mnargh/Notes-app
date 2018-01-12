function testNoteIDincrement() {

  var idnumber = NoteID.prototype.getIDnumber();
  assert.isTrue("ID initialises at value of 0", idnumber === 0);
  NoteID.prototype.increaseIDnumber();
  var idnumber = NoteID.prototype.getIDnumber();
  assert.isTrue("ID increments when creating a new ID", idnumber === 1);
};

testNoteIDincrement();
