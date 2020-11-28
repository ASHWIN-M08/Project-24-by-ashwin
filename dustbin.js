class Dustbin {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.bottom = Bodies.rectangle(x, y, 50, 50, options)
      this.left =  Bodies.rectangle(x-50, y-30, 50, 50, options)
      this.right =  Bodies.rectangle(x+50, y-30, 50, 50, options)

      this.width = 50;
      this.height = 50;
      
      World.add(world, this.bottom);
      World.add(world, this.left);
      World.add(world, this.right);
      this.image = loadImage("dustbingreen.png")
    }
    display(){
      var pos =this.bottom.position;
      var angle = this.bottom.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image,0, 0, 150, 180);
      pop();

      var po =this.left.position;
      var angle = this.left.angle;
      push();
      translate(po.x, po.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, 10, 100);
      pop();

      var posi =this.right.position;
      var angle = this.right.angle;
      push();
      translate(posi.x, posi.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, 10, 100);
      pop();
    }
  };