class Game{
    constructor(){
        this.box1 = loadImage("Images/TabletBox.jpg");
        this.box2 = loadImage("Images/TabletBox.jpg");
        this.box3 = loadImage("Images/TabletBox.jpg");
        this.box4 = loadImage("Images/TabletBox.jpg");
        this.box5 = loadImage("Images/TabletBox.jpg");
        this.box6 = loadImage("Images/TabletBox.jpg");
        this.box7 = loadImage("Images/TabletBox.jpg");
      
      this.monday = createElement().style('font-size','30px');
      this.tuesday = createElement().style('font-size','30px');
      this.wednesday = createElement().style('font-size','30px');
      this.thursday = createElement().style('font-size','30px');
      this.friday = createElement().style('font-size','30px');
      this.saturday = createElement().style('font-size','30px');
      this.sunday = createElement().style('font-size','30px');
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

    play(){
        form.hide();
       // background("blue");

        /*textSize(30);
        fill("red")*/
         this.monday.position("Monday",displayWidth/2 -650, displayHeight/4+380);
         this.tuesday.position("Tuesday",displayWidth/2 - 350, displayHeight/4+380);
         this.wednesday.position("Wednesday",displayWidth/2 - 50, displayHeight/4+380);
         this.thursday.position("Thursday",displayWidth/2 - 70, displayHeight/4+380);
         this.friday.position("Friday",displayWidth/2 - 90, displayHeight/4+380);
         this.saturday.position("Saturday",displayWidth/2 - 110, displayHeight/4+380);
         this.sunday.position("Sunday",displayWidth/2 - 130, displayHeight/4+380);

       // this.box1.position()
    }

    /*hideForm2(){
      this.monday.hide();
      this.tuesday.hide();
      this.wednesday.hide();
      this.thursday.hide();
      this.friday.hide();
      this.saturday.hide();
      this.sunday.hide();
    }*/
}