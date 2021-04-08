
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density: 1.2
         }
        this.pointB = pointB
        this.stone = loadImage('Plcking mangoes/stone.png');
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
    }
    attach(body){
        this.stone.bodyA = body;
    }
    
    fly(){
        this.stone.bodyA = null;
    }

    display(){
        image(this.stone,200,600);
        
    }
}