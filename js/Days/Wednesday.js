class Wednesday{
    constructor(){
        this.wednesday = createButton("Wednesday ->");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        this.wednesdaySde = createButton("My Schedule-Wed")
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
    }

    display(){
        this.wednesday.position(700, 300);

        this.wednesday.mousePressed(()=>{
            this.wednesday.hide();
            this.input1.position(800,400);
            this.input2.position(800,500);
            this.input3.position(800,600);
            this.wednesdaySde.position(900,800);
        })
        this.wednesdaySde.mousePressed(()=>{
            var schedule = new WednesdayS(); 
            schedule.display();
        })
    }
}