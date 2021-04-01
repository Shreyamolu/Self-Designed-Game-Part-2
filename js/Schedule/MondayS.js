class MondayS{
    constructor(){
        this.taketM = createButton("Take Morning Tablet");
        this.taketA = createButton("Take Afternoon Tablet");
        this.taketN = createButton("Take Night Tablet");
    }

    display(){
        this.taketM.position(600,700);
        this.taketA.position(600,800);
        this.taketN.position(600,900);
        this.greeting1 = createElement().style('font-size','20px');
        this.greeting2 = createElement().style('font-size','20px');
        this.greeting3 = createElement().style('font-size','20px');
        morningCount = patient.getTabletCountMorning("Monday","morning");
       /* afternoonCount = patient.getTabletCountAfternoon("Monday","afternoon");
        nightCount = patient.getTabletCountNight("Monday","night");*/
        this.greeting1.html("Tablets in the Morning -> " + morningCount);
        this.greeting1.position(300, 700);
        this.greeting2.html("Tablets in the Afternoon -> " + afternoonCount);
        this.greeting2.position(400, 800);
        this.greeting3.html("Tablets in the Night -> " + nightCount);
        this.greeting3.position(400, 900);

        this.taketM.mousePressed(()=>{
            morningCount = patient.getTabletCountMorning("Monday","morning");
            console.log(morningCount);
            patient.updateMorning("Monday","morning",morningCount);
            this.greeting1.html("Tablets in the Morning -> " + morningCount);
            this.greeting1.position(300, 700);
            this.greeting2.html("Tablets in the Afternoon -> " + afternoonCount);
            this.greeting2.position(400, 800);
            this.greeting3.html("Tablets in the Night -> " + nightCount);
            this.greeting3.position(400, 900);
        })
    }
}
