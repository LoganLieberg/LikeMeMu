var Dudes = function (name, bio, pic) {
  this.name = name;
  this.bio = bio;
  this.pic = pic;
}

var adam = new Dudes ('Adam', 'I love video games brohaha.', );
var zach = new Dudes ('Zach', 'Penguins.', );
var thomas = new Dudes ('Thomas', 'TURDLE', );
var logan = new Dudes ('Logan', 'Zach works at a Pizza place.', );

var dudesArray = [adam, zach, thomas, logan];

module.exports = dudesArray;
