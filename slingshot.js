class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        World.add(world, this.chain);
    }
    
    fly(){
          this.chain.bodyA = null;
    }    

    display(){
        image(this.sling1,200,24)
        image(this.sling2,170,24)
       
        if(this.chain.bodyA){
            
           push();
         
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        if(pointA.x<200){
            strokeWeight(2);
            stroke(48,22,8)
        line(pointA.x-13  , pointA.y+3 , pointB.x-15 , pointB.y+10);
        line(pointA.x-13  , pointA.y+3 , pointB.x+16 , pointB.y+10);
        image(this.sling3,pointA.x-23,pointA.y-12,10,30)
        }
        else{
            strokeWeight(8);
            stroke(48,22,8)
        line(pointA.x-13  , pointA.y+3 , pointB.x-15 , pointB.y+10);
        line(pointA.x-13  , pointA.y+3 , pointB.x+16 , pointB.y+10);
        image(this.sling3,pointA.x-23,pointA.y-12,10,30)
        }
        pop();
        }
    }
}
