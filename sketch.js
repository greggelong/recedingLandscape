let sbtm;
let sp;
let lns =80;
let h;

function setup(){
  createCanvas(800,800);
  //fullScreen();
  background(0);
  stroke(0,255,0);
  sp= width/lns;
  // small change
  sbtm = 10;
  h=0;
  
}

function draw(){
  
  background(0);
  h= map(mouseY,0,height,0,height-height/4);
  sbtm = map(mouseX,0,width,10,60);
  noFill();
  ellipse(width-width/4,h-height/4,height/5,height/5);
  rect((frameCount*2)%width,h-height/9,height/5,height/20);
  for(let i=0;i<lns;i++){
    line(i*sp,h,(i-lns/2)*sp*sbtm,height);
  }
}