class Wall
{
    constructor(x,y,w,h)
    {
        var ground_options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,ground_options);
        World.add(world,this.body);
    }
    display()
    {
        let pos = this.body.position
        push();
        rectMode(CENTER);
        noStroke()
        fill("green")
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}