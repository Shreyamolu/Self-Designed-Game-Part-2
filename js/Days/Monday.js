class Monday{
    constructor(){
        this.monday = createButton("Monday ->");
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.mondaySde.hide();
    }

    display(){
        this.monday.position(300, 300);

        this.monday.mousePressed(()=>{
            
        this.mondaySde = createButton("My Schedule-Mon");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");

        this.mondaySde.visible = true;

        this.monday.hide();
        this.input1.position(400,400);
        this.input2.position(400,500);
        this.input3.position(400,600);
        this.mondaySde.position(500,800);
        this.mondaySde.mousePressed(()=>{
            var morningCount = this.input1.value();
            var afternoonCount = this.input2.value();
            var nightCount = this.input3.value();
            patient.updateTabletCountMorning("Monday",morningCount);
            patient.updateTabletCountAfternoon("Monday",afternoonCount);
            patient.updateTabletCountNight("Monday",nightCount);
            this.input1.hide();
            this.input2.hide();
            this.input3.hide();
            this.mondaySde.hide();
            var schedule = new MondayS(); 
            schedule.display();
        })
        })


    }
}