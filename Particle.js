class Particle{
        constructor(x,y,r){

        var option={
            restitution:0.4
        }
        this.r=r;
        this.body=bodies.circle(x,y,this.r,option)
        this.color=color(random(0,255),random(0,255),random(0,255));
        world.add(world,this.body);

        }

display(){

      var pos=this.body.position;
      var angle=this.body.angle;

    push();
translate(pos.x,pos.y);
rotate(angle);

nostroke();
fill(this.colour)
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
pop();
}

}