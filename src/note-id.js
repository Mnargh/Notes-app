(function(exports) {
  function NoteID() {};

  NoteID.prototype.initID = function(){
    this.id = 0;
  };

  NoteID.prototype.increaseIDnumber = function(){
    this.id ++;
  };

  NoteID.prototype.getIDnumber = function(){
    return this.id;
  };
  exports.NoteID = NoteID;
})(this);
