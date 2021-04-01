class Sunday{
    constructor(){
        this.sunday = createButton("Sunday ->");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        this.sundaySde = createButton("My Schedule-Sun")
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
    }

    display(){
        this.sunday.position(1500, 300);

        this.sunday.mousePressed(()=>{
            this.sunday.hide();
            this.input1.position(1600,400);
            this.input2.position(1600,500);
            this.input3.position(1600,600);
            this.sundaySde.position(1700,800);
        })
        this.sundaySde.mousePressed(()=>{
            var schedule = new SundayS(); 
            schedule.display();
        })
    }
}