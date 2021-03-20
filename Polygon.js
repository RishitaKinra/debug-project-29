class Polygon{
    constructor(x,y,radius){
        this.polygon = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.img = loadImage("polygon.png");
        World.add(world,this.polygon);
    }

    display(){

        push();
        imageMode(RADIUS);
        image(this.img,this.polygon.position.x,this.polygon.position.y,this.radius,this.radius);
        pop();
    }
}