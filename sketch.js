var name;
var gameState = 0;
function preload(){
 i1 = loadImage("images/images/1.jpg");
 i2 = loadImage("images/images/2.jpg");
 i3 = loadImage("images/images/3.jpg");
 i4 = loadImage("images/images/4.jpg");
 i5 = loadImage("images/images/5.jpg");
 i6 = loadImage("images/images/6.jpg");
 i7 = loadImage("images/images/7.jpg");
 i8 = loadImage("images/images/8.jpg");
 i9 = loadImage("images/images/9.jpg");
 i10 = loadImage("images/images/10.jpg");
 i11 = loadImage("images/images/11.jpg");
 i = loadImage("images/images/Add a heading.png");
 i12 = loadImage("images/images/12.jpg");
 i13 = loadImage("images/images/13.jpg");
 i14 = loadImage("images/images/14.jpg");
 i15 = loadImage("images/images/15.jpg");
 i16 = loadImage("images/images/16.jpg");
 i17 = loadImage("images/images/17.jpg");
 i18 = loadImage("images/images/18.jpg");
 i19 = loadImage("images/images/19.jpg");
 i20 = loadImage("images/images/20.jpg");
 i21 = loadImage("images/images/21.jpg");
 i22 = loadImage("images/images/22.jpg");
 i23 = loadImage("images/images/23.jpg");
 i24 = loadImage("images/images/24.jpg");





}

function setup(){
createCanvas(windowWidth,windowHeight)
name = prompt("Enter your name here 😀");
}

function draw(){
    if(gameState === 0){
    background(i)
    fill(0)
    textSize(35)
    text("Hi "+ name,width/2,50);
    gameState = 1
    }
    if(gameState===1){
    if(keyDown("space")||touches.length>0){
    switch(Math.round(random(1,24))){
        case 1: background(i1)
        touches=[]
        break;
        case 2: background(i2)
        touches=[]
        break;
        case 3: background(i3)
        touches=[]
        break;
        case 4: background(i4)
        touches=[]
        break;
        case 5: background(i5)
        touches=[]
        break;
        case 6: background(i6)
        touches=[]
        break;
        case 7: background(i7)
        touches=[]
        break;
        case 8: background(i8)
        touches=[]
        break;
        case 8: background(i9)
        touches=[]
        break;
        case 10: background(i10)
        touches=[]
        break;
        case 11: background(i11)
        touches=[]
        break;
        case 12: background(i12)
        touches=[]
        break;
        case 13: background(i13)
        touches=[]
        break;
        case 14: background(i14)
        touches=[]
        break;
        case 15: background(i15)
        touches=[]
        break;
        case 16: background(i16)
        touches=[]
        break;
        case 17: background(i17)
        touches=[]
        break;
        case 18: background(i18)
        touches=[]
        break;
        case 19: background(i19)
        touches=[]
        break;
        case 20: background(i20)
        touches=[]
        break;
        case 21: background(i21)
        touches=[]
        break;
        case 22: background(i22)
        touches=[]
        break;
        case 23: background(i23)
        touches=[]
        break;
        case 24: background(i24)
        touches=[]
        break;
    }
}
}
}