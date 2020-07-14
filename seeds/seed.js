class seed{
    constructor(){
        this.button1 = createButton("Flower seeds");
        this.button2 = createButton("Vegetable seeds");
        this.button3 = createButton("Fruit seeds");
        this.button4 = createButton("Shrub seeds");
        
    }

    display(){
       this.button1.position(100,200);
       this.button2.position(600,200);
       this.button3.position(100,600);
       this.button4.position(600,600);   
       
       //flower seeds
       this.button1.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        
        fs.display();

        gameState.update(2);
       })
    }
}