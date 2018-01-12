

// var selecteddiv = document.getElementById('app');
// selecteddiv.innerHTML = "Fuck you Charles";

  (function(exports) {
    function Controller(notepad = new Notepad(), notelistview = new NotelistView(notepad)) {
      this.notepad = notepad;
      this.notelistview = notelistview;
    };

    // Controller.prototype.

    Controller.prototype.getHTML = function(elementID){
      document.getElementById(elementID).innerHTML = this.notelistview.returnToHTML();
    };

    exports.Controller = Controller;
  })(this);

window.onload = function(){

controller = new Controller();
controller.notepad.createNote("Favourite drink: seltzer");
controller.notepad.createNote("Pesto");
controller.getHTML('app');

};

/* testing

test new controller is instatiated

mock the element by creating a fake div with id app*/
