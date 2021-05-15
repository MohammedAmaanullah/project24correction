class Paper{
    constructor(x,y,radius){
        var options = {
            friction : 0.5,
            restitution : 0.3,
            density : 1.2
        }
        this.paper = Bodies.rectangle(x,y,radius,options);
        this.radius = radius;

        World.add(world, this.paper);
    }
    display(){
        var position = this.paper.position;
        push();
        translate(position.x, position.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }
}