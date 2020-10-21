class Dustbin{
constructor(x,y,w,h){
var options ={
isStatic :true   
}
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.image = loadImage("dustbingreen.png")
this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);

World.add(world,this.body);
}

display(){
var pos = this.body.position;
push()
translate(pos.x,pos.y);
imageMode(CENTER);
fill("blue");
image(this.image, 0,0,this.w, this.h);
pop()
}
};
