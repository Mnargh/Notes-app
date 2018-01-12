function testNoteCreation() {
  NoteID.prototype.initID();
  var note = new Note("That Keran is so hot right now");
  assert.isTrue("Can create a note with a description", note.description === "That Keran is so hot right now");
};

testNoteCreation();

function testEachNoteIDs() {


  // (function(exports) {
  //   function FakeNoteID(){
  //     this.id = 0
  //   };
  //
  //   FakeNoteID.prototype.initID = function(){
  //     this.id = 0;
  //   };
  //
  //   FakeNoteID.prototype.increaseIDnumber = function(){
  //     this.id ++;
  //   };
  //
  //   FakeNoteID.prototype.getIDnumber = function(){
  //     return this.id;
  //   };
  //
  //   exports.FakeNoteID = FakeNoteID;
  // })(this);
  //
  // var FakeNoteID = new FakeNoteID();

  // need to stub?

  var note1 = new Note("This is the first note");
  var note2 = new Note("This is the second note");


  assert.isTrue("First note created has an ID of 0", note1.id === 1);
  assert.isTrue("Second ntoe created has an ID of 1", note2.id === 2);
};

testEachNoteIDs();
