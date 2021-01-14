class Particle{
    constructor(x,y){
      var  options={
          isStatic:true
        }
       this.body=Bodies.circle(x,y,20,options)
       this.color=color(random(0,25),random(0,25),random(0,25));
       World.add(world,this.body);
    }
    display(){
     var pos=this.body.position;
     var angle=this.body.angle ;  

     push();
     translate(pos.x,pos.y);
     rotate(angle);
     
     fill(this.color);
     ellipseMode(RADIUS);
     ellipse(0,0,20,20);
     pop();
    } 
}