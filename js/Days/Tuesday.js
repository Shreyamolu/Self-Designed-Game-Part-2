class Tuesday{
    constructor(){
        this.tuesday = createButton("Tuesday ->");
        this.tuesdaySde = createButton("My Schedule-Tue")
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.tuesdaySde.hide();
    }

    display(){
        this.tuesday.position(500, 300);

        this.tuesday.mousePressed(()=>{

            this.input1 = createInput("No.of Tablets in the Morning");
            this.input2 = createInput("No.of Tablets in the Afternoon");
            this.input3 = createInput("No.of Tablets in the Night");

            this.tuesday.hide();
            this.input1.position(600,400);
            this.input2.position(600,500);
            this.input3.position(600,600);
            this.tuesdaySde.position(700,800);
        })
        this.tuesdaySde.mousePressed(()=>{
            var morningCount = this.input1.value();
            var afternoonCount = this.input2.value();
            var nightCount = this.input3.value();
            patient.updateTabletCountMorning("Tuesday",morningCount);
            patient.updateTabletCountAfternoon("Tuesday",afternoonCount);
            patient.updateTabletCountNight("Tuesday",nightCount);
            this.input1.hide();
            this.input2.hide();
            this.input3.hide();
            this.tuesdaySde.hide();
            var schedule = new TuesdayS(); 
            schedule.display();
        })
    }
}