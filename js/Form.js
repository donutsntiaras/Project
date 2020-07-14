class Form {

  constructor() {
    this.input = createInput("Name");
    this.input1 = createInput("Username");
    this.input2 = createInput("Password");
    this.button = createButton('Submit');
    
    this.title = createElement('h2');
    
  }
  hide(){
    
    this.button.hide();
    this.input.hide();
    this.input1.hide();
    this.input2.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 160);
    this.input1.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.input2.position(displayWidth/2 - 40 , displayHeight/2);
    this.button.position(displayWidth/2 + 30, displayHeight/2 + 80);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
     
            
    });

    

  }
}
