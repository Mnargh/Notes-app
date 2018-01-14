

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

function makeNoteLinkClickShowNote(){
  document.getElementById("text").addEventListener("submit", function(clickEvent) {
    clickEvent.preventDefault();
    controller.notepad.createNote(document.getElementById("textArea").value);
    controller.getHTML("app");
    document.getElementById("textArea").value = "";
  });
};


window.onload = function(){

controller = new Controller();
// controller.notepad.createNote("Favourite drink: seltzer");
// controller.notepad.createNote("Pesto");
// controller.getHTML('app');

makeURLChangeNoteForCurrentPage();
makeNoteLinkClickShowNote();

};


// makeTigerLinkClickSayTiger();
//
// function makeTigerLinkClickSayTiger() {
//   document
//     .getElementById("tiger-link")
//     .addEventListener("click", function(clickEvent) {
//       clickEvent.preventDefault();
//       sayTiger();
//     });
// };
//
// function sayTiger() {
//   document
//     .getElementById("animal")
//     .innerHTML = "tiger";
// };
