//Create variables here
 var dog,  happyDog,Dog, database;
 var foodS, foodStock;
 var fedTime,lastFed;
 var feed,addFood;
 var foodObj;
 var readState;
 
function preload()
{
  happyDog=loadImage("happydog.png");
  Dog = loadImage("Dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  
  foodObj = new Food();

  dog= createSprite(200,400,10,10);
  dog.addImage(Dog);
 dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  fedTime=database.ref('FeedTime');
   fedTime.on("value",function(data){
     lastFed=data.val();
   })

  
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
function draw() {  
  background(46,139,89);
  foodObj.display();
  //image(Dog,210,210,100,100);
//if(keyWentDown(UP_ARROW)){
  //writeStock(foodS);
  //dog.addImage(happyDog);
 //}
  drawSprites();
}




  //add styles here

//}
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
      Food:foodObj.getFoodStock(),
      FeedTime:hour()
  })
}
function addFoods(){
  foodS++;
  database.ref('/').update({
   Food:foodS
  })
}

