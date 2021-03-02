class Paper {
    constructor(x,y,width,height) {
        var options = {
            isSatic:false,
            restitution:0.3,
            friction:1.5,
            density:1.2
        }

        this.image = loadImage("paper.png")
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);

    }

    display(){
        push()
        imageMode(CENTER);
        image(this.image, x, y, radius);
        pop()
    }
}