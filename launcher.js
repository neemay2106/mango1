class launcher{
    constructor(bodyA, anchor){
        var options = {
            bodyA: bodyA,
            pointB: anchor,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA =  body
        this.pointB = anchor
        this.sling = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    
}