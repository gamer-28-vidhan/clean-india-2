class Gbg {

    constructor(angle){

        var b = {
		
            isStatic:false,
            'friction':3,
            'density':1.2,
            'restitution':0.1
    
        }   

this.body = Bodies.circle(160,495,15,b)
this.image = loadImage("images/paper.png")
World.add(world,this.body)


    }

display() {
    var angle = this.body.angle
    var dim = this.body.position
   

ellipseMode(RADIUS)
fill ("lightgreen")
strokeWeight(0)
ellipse(dim.x, dim.y, 15)

imageMode(CENTER)

image (this.image, dim.x, dim.y, 50,50 )

push ();
translate (this.body.position.x, this.body.position.y)
rotate(angle);
pop ();
   





}







}