var ClozeCard = function(text,close){
  this.text=text;
  this.partial=close;
  this.fullText=close +" "+ text;
  this.print=function() {
        console.log(this.fullText);
  }
};


var card = new ClozeCard("Obama","Who was the former president?")
card.print();

module.exports = ClozeCard;
