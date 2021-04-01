class Saturday{
    constructor(){
        this.saturday = createButton("saturday ->");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        this.saturdaySde = createButton("My Schedule-Sat")
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
    }
 
    display(){
        this.saturday.position(1300, 300);

        this.saturday.mousePressed(()=>{
            this.saturday.hide();
            this.input1.position(1400,400);
            this.input2.position(1400,500);
            this.input3.position(1400,600);
            this.saturdaySde.position(1500,800);
        })
        this.saturdaySde.mousePressed(()=>{
            var schedule = new SaturdayS(); 
            schedule.display();
        })
    }
}