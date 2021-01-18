var inputBox
var startPomodoro
var timer
var gameState = "not started"
var trees_array=[]
var treesCount = 1;
var restartPomodoro;

function preload() {
  //getTime();
  bg = loadImage("bg.png");
  tree1 = loadImage("tree1.png");
  tree2 = loadImage("tree2.png");
  tree3 = loadImage("tree3.png")
  ticking = loadSound("ticking.mp3");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-120);
  inputBox = createInput("Time(in min)")
  inputBox.position(width/2-65,100);
  startPomodoro = createButton("Start")
  startPomodoro.position(width/2+5,150);
}

function draw() {
  background(bg);
  textSize(30);
  fill(rgb(246,0,140));  
  text("Blossom-Pomodoro Timer🌻🌸🍃",width/2-130,50);
  startPomodoro.mousePressed(()=>{
    inputBox.hide();
    startPomodoro.hide();
    timer = inputBox.value();
    timer=timer*1700
  gameState="started"
  ticking.loop();
  })  
  if(gameState==="started" && timer>0){
    timer=timer-1
//text(timer+"seconds left",100,50);
    text(Math.round(timer/28)+"Seconds left",100,100);
    
  }
  if(timer===0 && gameState==="started"){
    var tree = createSprite(treesCount*100,400,10,10)
    tree.scale = 0.8;
      var rand = Math.round(random(1,3));
      switch(rand){
        case 1: tree.addAnimation("tree1",tree1);
        break;
        case 2: tree.addAnimation("tree2",tree2);
        break;
        case 3: tree.addAnimation("tree3",tree3);
        break;

      }
     
trees_array.push(tree)  
treesCount =  treesCount+1
gameState = "planted"
  }
  if(gameState==="planted"){
    text("you have planted a cute little tree!",200,200);
    ticking.stop();
    // restartPomodoro = createButton("Plant another Tree!")
    // restartPomodoro.position(120,150);
  
    // restartPomodoro.mousePressed(()=>{
    //   restartPomodoro.hide();
     gameState="restart";
      
     
      inputBox = createInput("Time(in min)")
  inputBox.position(width/2-65,100);
  startPomodoro = createButton("Plant another Tree!")
  startPomodoro.position(width/2+5,150);
    //})

  }
  // if(gameState==="restart"){
    console.log(gameState);
  // gameState="started"
  //}

  
  drawSprites();
}

