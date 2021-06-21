var spacebg,spacebgimg;

var spaceship,spaceshipimg;

var spaceshotimg,spaceshot;

var asteroidimg,asteroid;

var asteroidGroup;

var life=3;

var spaceshotGroup;

var spaceshipGroup;

function preload (){

spacebgimg=loadImage("space.jpg");
//spaceshipimg=loadImage("spaceshipProject.png");
spaceshotimg=loadImage("spacelaser.png");
asteroidimg=loadImage("asteroid1.png");

}

function setup(){

    createCanvas(1200,700);



   // spacebg=createSprite(950,350,50,50);
   // spacebg.addImage(spacebgimg);
   //spaceship=createSprite(600,590);
  // spaceship.addImage(spaceshipimg);
   //spaceship.scale=0.55;

   asteroidGroup=new Group();
    spaceshotGroup= new Group();

   spaceship=new spaceShip(600,590);

   
  
}

function draw(){
    
    background("black");

    for (var i = 0; i < asteroidGroup.length; i++) {
        if (asteroidGroup.get(i).isTouching(spaceshotGroup)) {
            asteroidGroup.get(i).destroy();
            spaceshotGroup.destroyEach();
            
           // player.score =player.score+1;
           // player.update();
        }
        
    }


    


    textSize(16);
    fill("white");
    text("Life:"+life,30,30)

    

spaceship.display();
 
    obstacles();



    drawSprites();
}

function obstacles(){
    if(frameCount%30===0){
        var rand= Math.round(random(100,1100));
        var rand2=Math.round(random(0,4));

       

        console.log(rand2);
        asteroid=createSprite(500,50,20,20);
        asteroid.x=rand;
        asteroid.addImage(asteroidimg);

        switch(rand2){
            case 1:asteroid.scale=0.5;
            break;
            case 2:asteroid.scale=0.6;
            break;
            case 3:asteroid.scale=0.7;
            break;
            case 4:asteroid.scale=0.8;
            break;
            case 0:asteroid.scale=0.4;
            break;
            default:break;
        }

       // asteroid.scale=rand2;
        asteroid.velocityY=7;

        asteroidGroup.add(asteroid);
       // drawSprites();
    }
}