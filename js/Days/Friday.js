class Friday{
    constructor(){
        this.friday = createButton("Friday ->");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        this.fridaySde = createButton("My Schedule-Fri")
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
    }
 
    display(){
        this.friday.position(1100, 300);

        this.friday.mousePressed(()=>{
            this.friday.hide();
            this.input1.position(1200,400);
            this.input2.position(1200,500);
            this.input3.position(1200,600);
            this.fridaySde.position(1300,800);
        })
        this.fridaySde.mousePressed(()=>{
            var schedule = new FridayS(); 
            schedule.display();
        })
    }
}