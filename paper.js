class Paper {
  constructor(x, y) {
    var options = {
        isStatic:false,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x, y,20,options);
    this.r=40;
    World.add(world, this.body);
    this.image=loadImage("paper.png");
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    image(this.image,0, 0, this.r, this.r);
    pop();
  }
};