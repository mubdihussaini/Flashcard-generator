

var BasicCard = function(front,back)
      {
        this.front=front;
        this.back=back;
        this.print= function()
            {
              console.log(this.front, this.back);
            }
      };

    var test =new BasicCard ("who","Obama");
    test.print();
    
module.exports = BasicCard;
