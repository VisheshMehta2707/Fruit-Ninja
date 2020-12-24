var FruitImage1
var Fruit1
var FruitImage2
var Fruit2
var FruitImage3
var Fruit3
var FruitImage4
var Fruit4
var SwordImage
var Sword
var Fruit
var FruitGroup;
var SwordSound


function preload(){
FruitImage1 = loadImage("fruit1.png");
FruitImage2 = loadImage("fruit2.png");
FruitImage3 = loadImage("fruit3.png");
FruitImage4 = loadImage("fruit4.png");
SwordImage = loadImage("sword.png");
SwordSound=  loadSound("Sword.mp3")
  
}


function setup(){
createCanvas(400,400)
 FruitGroup = createGroup(); 
 
Sword=createSprite(40,200,20,20)
Sword.addImage(SwordImage)
Sword.scale=0.7

  
}

function draw(){
background("brown")
Sword.y= mouseY  
Sword.x=mouseX
  SpawnFruits()
  if(Sword.isTouching(FruitGroup))
    {
      FruitGroup.destroyEach();
      SwordSound.play()
      
    }
 drawSprites()
}
  
function SpawnFruits(){
if( frameCount  % 60 == 0){
  
Fruits=createSprite(400,200,10,10);
Fruit=Math.round(random(1,4)) 
Fruits.scale=0.2
Fruits.velocityX=-4

Fruits.y=Math.round(random(1,400))
switch (Fruit) {
case 1: Fruits.addImage(FruitImage1)
     break
case 2 : Fruits.addImage (FruitImage2)
     break 
case 3 : Fruits.addImage(FruitImage3)
      break
case 4 : Fruits.addImage(FruitImage4)
      break
      

      

}
FruitGroup.add(Fruits);
}
}
  



