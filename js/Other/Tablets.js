class TabletsClass{
        constructor(){
            this.tabletStock = 15;
            this.lastTaken;
            this.image = loadImage("Images/Tablet.jpg");
        }

    updatetabletStock(tabletStock)
    {
        this.tabletStock = tabletStock;
    }

    getTakenTime(lastTaken)
    {
        this.lastTaken = lastTaken;
    }

    deductFood()
    {
        if(this.tabletStock > 0 )
        {
            this.tabletStock = this.tabletStock - 1
        }
        return this.tabletStock;
    }

    gettabletStock()
    {
        return this.tabletStock;
    }

    display()
    {
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

        if(this.tabletStock != 0)
        {
            for(var i=0; i<this.tabletStock; i++)
            {
                if(i%10 == 0)
                {
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50);
                x = x + 30;
            }
        }
    }

}