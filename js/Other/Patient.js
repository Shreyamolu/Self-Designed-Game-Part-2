class Patient{

    constructor(){
        
    }

    getTabletCountMorning(day,time){
        var tabletCountref = database.ref("Days/"+day+"/"+time);
        console.log(tabletCountref);
        tabletCountref.on("value",function (data){
            tabletCount = data.val();
        });
        return tabletCount;
    }
    updateMorning(day,time,x){
        if(x<=0){
            x=0;
          }else{
            x=x-1;
          } 
          console.log(x)
        var tabletCountref = database.ref("Days/"+day+"/");
        console.log(tabletCountref);
        tabletCountref.update({morning:5})
        return tabletCount;
    }
    /*getTabletCountAfternoon(day,time){
        var dayCountref = database.ref("Days/"+day+"/"+time);
        dayCountref.on("value",function (data){
            dayCount = data.val();
        });
        return tabletCount;
    }
    getTabletCountNight(day,time){
        var monthCountref = database.ref("Days/"+day+"/"+time);
        monthCountref.on("value",function (data){
            monthCount = data.val();
        });
        return tabletCount;
    }*/

    updateTabletCountMorning(day,count){
        database.ref("Days/"+day+"/").update ({
            morning : count
        })
    }
    updateTabletCountAfternoon(day,count){
        database.ref("Days/"+day+"/").update ({
            afternoon : count
        })
    }
    updateTabletCountNight(day,count){
        database.ref("Days/"+day+"/").update ({
            night : count
        })
    }
}