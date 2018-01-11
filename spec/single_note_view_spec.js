function testSingleNoteViewReturnsNoteHTML() {

  function FakeNote(){
    this.description = "This is a note"
  };

  // FakeNote.prototype = {
  //   description: function() {
  //     return ["This is note 1"];
  //   }
  // };


  var singlenoteview = new SingleNoteView(new FakeNote());


  returnedhtml = singlenoteview.ReturnNoteHTML();
  assert.isTrue("SingleNoteView returns string of HTML from note model", returnedhtml  === "<li>This is a note</li>");
};

testSingleNoteViewReturnsNoteHTML();
