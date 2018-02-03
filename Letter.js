console.log("Started");
function Letter(ltr) {
    this.letter = ltr;
    this.current = "_";
    this.guessed = false;

    this.letterFunction = function(entry) {
        if (this.letter == entry) {
            this.current = this.letter;
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    }
    this.updateGuessed = function() {
        if (this.guessed === true) {
            return this.letter
        } else {
            return this.current;
        };
    }
}


// var d = new Letter("x");
// console.log(d);

module.exports = Letter