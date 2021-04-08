class Mango{
    constructor(){
        var options = {
            isStatic: true,
            restitution:0,
            friction:1,
         }
        this.mango = loadImage('Plucking mangoes/mango.png');
        this.mango = Constraint.create(options);
        
        this.body = Matter.Bodies.circle(56, 46, 27.5);
        this.hieght = 27.5;
        this.width = 27.5;
        World.add(world, this.mango);
        }
    }