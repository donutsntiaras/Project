class vegSeeds extends BaseClass{
    constructor(x,y){
       super(x,y,80,80);
        this.image = loadImage("seeds/s5.jpg");
        this.image1 = loadImage("seeds/s6.jpg");
        //this.image2 = loadImage("seeds/s3.jpg");
        //this.image3 = loadImage("seeds/s4.jpg");
    }
    display(){
        var pos = this.body.position;
        
        image(this.image, pos.x, pos.y, this.width, this.height);
        image(this.image1, pos.x +200, pos.y, this.width, this.height);
        //image(this.image2, pos.x, pos.y + 200, this.width, this.height);
        //image(this.image3, pos.x + 200, pos.y + 200, this.width, this.height);
        
    }
}