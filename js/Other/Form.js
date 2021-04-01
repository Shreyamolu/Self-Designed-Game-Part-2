class Form{

    constructor(){
        this.input1 = createInput("Name");
       /* this.input2 = createInput("No.of Tablets in a Day");
        this.input3 = createInput("No.of Tablets in a Month");*/
        this.button1 = createButton("Next ->");
        /*this.button2 = createButton("Monday ->");
        this.button3 = createButton("Tuesday ->");
        this.button4 = createButton("Wednseday ->");
        this.button5 = createButton("Thursday ->");
        this.button6 = createButton("Friday ->");
        this.button7 = createButton("Saturday ->");
        this.button8 = createButton("Sunday ->");*/
        this.greeting = createElement().style('font-size','30px');
    }

    hide(){
        this.input1.hide();
       /* this.input2.hide();
        this.input3.hide();*/
        this.button1.hide();
        /*this.button2
        this.button3
        this.button4
        this.button5
        this.button6
        this.button7
        this.button8*/
        this.greeting.hide();
    }
    display(){

        this.input1.position(displayWidth/2+350, displayHeight/2);
       /* this.input2.position(displayWidth/2 - 40 , displayHeight/2 - 100);
        this.input3.position(displayWidth/2 - 40 , displayHeight/2 - 50);*/
        this.button1.position(displayWidth/2+350, displayHeight/2+ 50);
        this.greeting.html("Welcome to the Scheduler!!");
        this.greeting.position(displayWidth/2+300, displayHeight/2-220);

        this.button1.mousePressed(()=>{
            this.input1.hide();
            /*this.input2.hide();
            this.input3.hide();*/
            this.button1.hide();
           /* var dayCount = this.input2.value();
            var monthCount = this.input3.value();
            var tabletCount = Math.round(dayCount*monthCount);
            patient.updateDayCount(dayCount);
            patient.updateMonthCount(monthCount);
            patient.updateTabletCount(tabletCount);*/
            //game.update(1);
            var monday = new Monday();
            monday.display();
            var tuesday = new Tuesday();
            tuesday.display();
            var wednesday = new Wednesday();
            wednesday.display();
            var thursday = new Thursday();
            thursday.display();
            var friday = new Friday();
            friday.display();
            var saturday = new Saturday();
            saturday.display();
            var sunday = new Sunday();
            sunday.display();
          });   

}
}
