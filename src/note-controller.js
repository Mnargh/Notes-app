

// var selecteddiv = document.getElementById('app');
// selecteddiv.innerHTML = "Fuck you Charles";

  (function(exports) {
    function Controller(notepad = new Notepad(), notelistview = new NotelistView(notepad)) {
      this.notepad = notepad;
      this.notelistview = notelistview;
    };

    Controller.prototype.getHTML = function(elementID){
      document.getElementById(elementID).innerHTML = this.notelistview.returnToHTML();
    };

    exports.Controller = Controller;
  })(this);

function makeURLChangeNoteForCurrentPage(){
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(window.location.hash.split("#notes/")[1]);
};

function showNote(noteID) {
  var singlenotehtml = new SingleNoteView(controller.notepad.getNoteByID(parseInt(noteID)))

  document.getElementById("app").innerHTML = singlenotehtml.returnNoteHTML();
};




window.onload = function(){

controller = new Controller();
controller.notepad.createNote("Favourite drink: seltzer");
controller.notepad.createNote("Pesto");
controller.getHTML('app');

makeURLChangeNoteForCurrentPage();

};


     // makeUrlChangeShowAnimalForCurrentPage();
     //
     // function makeUrlChangeShowAnimalForCurrentPage() {
     //   window.addEventListener("hashchange", showAnimalForCurrentPage);
     // };
     //
     // function showAnimalForCurrentPage() {
     //   showAnimal(getAnimalFromUrl(window.location));
     // };
     //
     // function getAnimalFromUrl(location) {
     //   return location.hash.split("#")[1];
     // };
     //
     // function showAnimal(animal) {
     //   document
     //     .getElementById("animal")
     //     .innerHTML = animal;
     // };
