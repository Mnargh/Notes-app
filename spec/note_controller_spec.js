function testControllerIsInstantiated(){



  function FakeNotepad(){};

  FakeNotepad.prototype = {
    // returnNotes: function() {
    //   // return ["This is note 1"];
    // }
  };

  function FakeNoteListView(){};

  FakeNoteListView.prototype = {
    returnToHTML: function(){
      return '<ul><li>This is note 1</li></ul>';
    }
  };


  var controller = new Controller(new FakeNotepad, new FakeNoteListView);
  var html = controller.notelistview.returnToHTML();
  controller.getHTML('app');

  // console.log(html);
  // console.log("html above, get element below");
  // console.log(document.getElementById('app').innerHTML);
  assert.isTrue("app div contains html of the description of the notes", document.getElementById('app').innerHTML === html);
};

testControllerIsInstantiated();
