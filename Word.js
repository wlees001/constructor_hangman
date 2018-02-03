var letter = require ('./Letter.js');

var Word = function(word) {
    this.letterarray = word.split('').map(function(item){return new letter(item)});
    this.wordFunction = function() {
        var wordFormat = "";
        this.letterarray.forEach(function(item,index){
            wordFormat = wordFormat + " " + item.letterFunction();
        });
        this.passCharacter = function() {
            this.letterarray.forEach(function(item, index) {
                item.updateGuessed();
                //concatonate 
                Letter
            });
        }
    }
}
// var x = new Word("will");

// console.log("x");
// console.log(x.wordFunction('w'));


module.exports = Word;