var dog, happyDog, database, foods, foodStock;

function preload()
{
  dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {
  background(46, 139, 87);

  dog.addImage(dog);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy);
  }


  drawSprites();
  Text("Note: Press the up arrow key to feed your pet some milk");

}

function readStock(data){
  foods=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}




