class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.y = y;
        this.x = x;
        this.r=r;
      
        this.body = Bodies.circle(x, y, r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(CENTER);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};