class Thursday{
    constructor(){
        this.thursday = createButton("Thursday ->");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        this.thursdaySde = createButton("My Schedule-Thu")
    }
 
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
    }

    display(){
        this.thursday.position(900, 300);

        this.thursday.mousePressed(()=>{
            this.thursday.hide();
            this.input1.position(1000,400);
            this.input2.position(1000,500);
            this.input3.position(1000,600);
            this.thursdaySde.position(1100,800);
        })
        this.thursdaySde.mousePressed(()=>{
            var schedule = new ThursdayS(); 
            schedule.display();
        })
    }
}