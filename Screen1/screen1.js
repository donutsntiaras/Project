class screen1{
    constructor(){
        this.button = createButton('Water');
    }
    display(){
        this.button.position(displayWidth/2 , displayHeight/2);
        
        this.button.mousePressed(()=>{
            for (var i = 0; i < 500; i++) {
                raindrops[i] = new raindrop();
            }

            for(var i = 0; i < raindrops.length; i++){
                raindrops[i].rainfall();
                raindrops[i].display();
            }
        })

        drawSprites();
    }
}